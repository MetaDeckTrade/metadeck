import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { Float, Preload, useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";
import { lerp } from "three/src/math/MathUtils.js";
import { coordinatesRef } from "@/pages/_app";
import useGlobalStore from "@/store/store";

interface ModelProps {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: any,
    firstContainerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    lastContainerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    mPointer: any,
}



export default function Model({ containerRef, inView, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef, mPointer, lastContainerRef}: ModelProps) {
    const {scene} = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(1);

    const inViewBlanket = useGlobalStore((state: any) => (state.inViewBlanket))
    const width = useWindowWidth();
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if (!inView) return;
        setAnimatedOnce(true);
    }, [inView]);

    const effect = useSpring({
        opacity: animatedOnce ? 1 : 0,
        y: animatedOnce ? -1.6 : -4.6,
        config: { duration: 700, easing: easings.easeInOutCubic },
        delay: 1800,
    });

    const uniforms = useRef({ alpha: { value: 0 } })



    const model = useMemo(() => {
        scene.clone().traverse((object: any) => {
            if (object.isMesh) {
                const material = object.material.clone()
                material.transparent = true
    
                object.castShadow = true
                object.recieveShadow = true
    
                material.onBeforeCompile = (_shader: THREE.Shader) => {
                    _shader.uniforms = { ..._shader.uniforms, ...uniforms.current  }
    
                    // Injection
                    _shader.fragmentShader = _shader.fragmentShader.replace('#include <common>', `
                        #include <common>
                        uniform float alpha;
                    `)
                    _shader.fragmentShader = _shader.fragmentShader.replace('#include <dithering_fragment>', `
                        #include <dithering_fragment>
                        gl_FragColor.a *= alpha;
                    `)
                }
                object.material = material
            }
        })
        return scene
    }, [scene])

    const [progressValues, progState] = useSpringTrigger({
        trigger: firstContainerRef,
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "0.9", y: "3.3", z: "0",
            positionX: width > 1024 ? "2.1" : "0", positionY: "-1.6", positionZ: "-1",
        },
        to: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "2.1", positionY: "-0.5", positionZ: "0",
        },
        config: {duration: 1},
    });

    const [progressValuesSecond, secondState] = useSpringTrigger({
        trigger: firstCustomRef,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "2.1", positionY: "-0.5", positionZ: "0",

        },
        to: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",

        },
        config: {duration: 1},
    });

    const [progressValuesThird, thirdState] = useSpringTrigger({
        trigger: secondCustomRef,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",

        },
        to: {
            x: ".5", y: "3.2", z: "0",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",

        },
        config: {duration: 1},
    });

    const [progressValuesFourth, fourthState] = useSpringTrigger({
        trigger: lastContainerRef,
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
        from: {
            x: ".5", y: "3.2", z: "0",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",
        },
        to: {
            x: "-.1", y: "2.9", z: "-.2",
            positionX: "1.5", positionY: "-.8", positionZ: "0",
        },
        config: {duration: 1},
    });

    useEffect(() => {
        if(!inViewBlanket && modelRef.current) {
            modelRef.current.visible = false
        } else if (modelRef.current && inViewBlanket) {
            modelRef.current.visible = true
        }
    }, [inViewBlanket])
    
    useFrame(({ pointer, size }) => {
        if(!inViewBlanket) return

        if (modelRef.current) {
            const progress = progState.progress.get() + secondState.progress.get() + thirdState.progress.get() + fourthState.progress.get() 
        
        
            if (progress <= 1) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValues.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValues.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValues.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValues.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValues.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValues.positionZ.get(), 0.05)
                );
            } else if (progress <= 2) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesSecond.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesSecond.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesSecond.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesSecond.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesSecond.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesSecond.positionZ.get(), 0.05)
                );
            } else if (progress <= 3) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesThird.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesThird.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesThird.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesThird.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesThird.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesThird.positionZ.get(), 0.05)
                );
            } else if (progress <= 4) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesFourth.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesFourth.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesFourth.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesFourth.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesFourth.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesFourth.positionZ.get(), 0.05)
                );
            }

            if(width > 1024) {
                modelRef.current.rotation.set(
                    modelRef.current.rotation.x + coordinatesRef.x * 0.005,
                    modelRef.current.rotation.y + coordinatesRef.y * 0.005,
                    modelRef.current.rotation.z
                );
            }
        }

        uniforms.current.alpha.value = effect.opacity.get()
    });


    return (
        <Float>
            <primitive
                ref={modelRef}
                position={[width > 1024 ? 7.1 : 0, -1.6, -1]}
                scale={width > 1024 ? 21 : 18}
                rotation={[0.9, 3.3, 0]}
                object={model}
            />
        </Float>
    );
}