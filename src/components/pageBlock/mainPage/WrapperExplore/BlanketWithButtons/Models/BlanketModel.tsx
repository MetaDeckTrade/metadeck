import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { PageView } from "@/layouts/CanvasLayout/components/PageView";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { Preload, useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";
import { lerp } from "three/src/math/MathUtils.js";
import { coordinatesRef } from "@/pages/_app";
import useGlobalStore from "@/store/store";

interface Model {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: boolean,
    position: Array<number>,
    rotation: Array<number>,
    activeNumber: number,
}

export default function BlanketModal({ inView, rotation, position, containerRef, activeNumber }: Model) {
    const { scene } = useGLTF('/models/buttonsBlunket.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(0);

    const inViewButtonBlanket = useGlobalStore((state: any) => (state.inViewButtonBlanket));
    const width = useWindowWidth();
    const [animatedOnce, setAnimatedOnce] = useState(false);

    const model = useMemo(() => {
        const clonedScene = scene.clone();

                //lines opacity and z
        const line1 = clonedScene.getObjectByName('line_1') as THREE.Group;
        const line2 = clonedScene.getObjectByName('line_2') as THREE.Group;
        const line3 = clonedScene.getObjectByName('line_3') as THREE.Group;

        const applyShader = (object: THREE.Object3D) => {
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    console.log(child.material)

                    const material = child.material.clone()


                    material.onBeforeCompile = (shader: THREE.Shader) => {
                        console.log('onBeforeCompile called');
                        shader.fragmentShader = 'uniform float uOpacity; ' +shader.fragmentShader

                        shader.fragmentShader = shader.fragmentShader.replace('#include <dithering_fragment>', `
                            #include <dithering_fragment>

                            gl_FragColor.rgb *= uOpacity;
                        `)
                        console.log(shader, 'f')
                    }

                    child.material = material

                    // console.log(originalMaterial)

                    // const uniforms = {
                    //     uOpacity: { value: opacity },
                    //     uColor: { value: new THREE.Color(originalMaterial.color) },
                    //     uTexture: { value: originalMaterial.map },
                    // };
        
                }
            });
        };
        
        if (line1) applyShader(line1);
        if (line2) applyShader(line2);
        if (line3) applyShader(line3);

        return clonedScene;
    }, [scene]);

    useEffect(() => {
        if (!inView) return;
        if (inView) {
            setAnimatedOnce(true);
        }
    }, [inView]);

    useEffect(() => {
        if (!inViewButtonBlanket && modelRef.current) {
            modelRef.current.visible = false
        } else if (modelRef.current && inViewButtonBlanket) {
            modelRef.current.visible = true;
        }
    }, [inViewButtonBlanket]);

    const [props, setProps] = useSpring(() => ({
        line1Opacity: 1,
        line2Opacity: 1,
        line3Opacity: 1,
        line1Z: .061,
        line2Z: .061,
        line3Z: .061,
        config: { duration: 300, easing: easings.easeInOutCubic },
    }));

    useEffect(() => {
        setProps({
            line1Opacity: activeNumber === 1 ? 0.5 : 1,
            line2Opacity: activeNumber === 2 ? 0.5 : 1,
            line3Opacity: activeNumber === 3 ? 0.5 : 1,
            line1Z: activeNumber === 1 ? .056 : .061,
            line2Z: activeNumber === 2 ? .056 : .061,
            line3Z: activeNumber === 3 ? .056 : .061,
        });
    }, [activeNumber, setProps]);

    const { values: progressValues } = useSpringTrigger({
        trigger: containerRef,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
        from: {
            x: `${rotation[0]}`, y: `${rotation[1]}`, z: `${rotation[2]}`,
            positionX: `${position[0]}`, positionY: `${position[1]}`, positionZ: `${position[2]}`,
        },
        to: {
            x: `${rotation[0]}`, y: `${rotation[1]}`, z: `${rotation[2]}`,
            positionX: "-.12", positionY: `${position[1] + 0.5}`, positionZ: `${position[2]}`,
        },
        onChange: (state) => {
            progressRef.current = state.value.progress;
        }
    });



    useFrame((state) => {
        if (!modelRef.current) return;


        //blanket pos and rotation
        const time = state.clock.getElapsedTime();
        const baseRotationX = rotation[0] + Math.sin(time * 0.5) * 0.05;  // Small oscillation in X
        const baseRotationY = rotation[1] + Math.sin(time * 0.3) * 0.05;  // Small oscillation in Y
        const baseRotationZ = rotation[2] + Math.sin(time * 0.4) * 0.05;  // Small oscillation in Z

        if (width < 1024) {
            modelRef.current.rotation.set(
                +progressValues.x.get(),
                +progressValues.y.get(),
                +progressValues.z.get()
            );
            modelRef.current.position.set(
                +progressValues.positionX.get(),
                +progressValues.positionY.get(),
                +progressValues.positionZ.get()
            );
        } else {
            modelRef.current.rotation.set(
                baseRotationX + coordinatesRef.x * 0.01,
                baseRotationY + coordinatesRef.y * 0.01,
                baseRotationZ
            );
        }
    });

    return (
        <primitive
            ref={modelRef}
            scale={20}
            position={position}
            rotation={rotation}
            object={model}
        />
    );
}
