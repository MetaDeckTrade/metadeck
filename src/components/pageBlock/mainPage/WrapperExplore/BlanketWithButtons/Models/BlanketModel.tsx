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

const uniforms = {
    uLine1Opacity: { value: 1 },
    uLine2Opacity: { value: 1 },
    uLine3Opacity: { value: 1 },
}

export default function BlanketModal({ inView, rotation, position, containerRef, activeNumber }: Model) {
    const { scene } = useGLTF('/models/buttonsBlunket.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(0);

    const inViewButtonBlanket = useGlobalStore((state: any) => (state.inViewButtonBlanket));
    const width = useWindowWidth();
    const [animatedOnce, setAnimatedOnce] = useState(false);

    // const uniforms = useRef({
    //     uLine1Opacity: { value: 1 },
    //     uLine2Opacity: { value: 1 },
    //     uLine3Opacity: { value: 1 },
    // })

    const { clonedScene, line1, line2, line3 } = useMemo(() => {
        const clonedScene = scene.clone();

        //lines opacity and z
        const line1 = clonedScene.getObjectByName('line_1') as THREE.Group;
        const line2 = clonedScene.getObjectByName('line_2') as THREE.Group;
        const line3 = clonedScene.getObjectByName('line_3') as THREE.Group;

        const applyShader = (object: THREE.Object3D, uniform: { value: number }) => {
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {

                    child.material.onBeforeCompile = (shader: THREE.Shader) => {
                        shader.uniforms.uOpacity = uniform

                        shader.fragmentShader = shader.fragmentShader.replace('varying vec3 vViewPosition;', `
                            varying vec3 vViewPosition;
                            uniform float uOpacity;
                        `)

                        shader.fragmentShader = shader.fragmentShader.replace('#include <dithering_fragment>', `
                            #include <dithering_fragment>
                            gl_FragColor.rgb *= uOpacity;
                        `)
                    }
                }
            });
        };

        if (line1) applyShader(line1, uniforms.uLine1Opacity);
        if (line2) applyShader(line2, uniforms.uLine2Opacity);
        if (line3) applyShader(line3, uniforms.uLine3Opacity);

        return { clonedScene, line1, line2, line3 };
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
        switch (activeNumber) {
            case 1:
                line1.visible = false
                line2.visible = true
                line3.visible = true
                break;
            case 2:
                line1.visible = true
                line2.visible = false
                line3.visible = true
                break;
            case 3:
                line1.visible = true
                line2.visible = true
                line3.visible = false
                break;
        }

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
        uniforms.uLine1Opacity.value = props.line1Opacity.get()
        uniforms.uLine2Opacity.value = props.line2Opacity.get()
        uniforms.uLine3Opacity.value = props.line3Opacity.get()

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
            object={clonedScene}
        />
    );
}
