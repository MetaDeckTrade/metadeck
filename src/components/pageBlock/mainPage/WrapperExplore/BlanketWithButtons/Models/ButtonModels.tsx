import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";
import { coordinatesRef } from "@/pages/_app";
import useGlobalStore from "@/store/store";

interface Model {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: any,
    position: any,
    rotation: any,
    url: string,
    blockNumber: number,
    activeNumber: number,
}

export default function ButtonModels({ containerRef, inView, rotation, position, url, blockNumber, activeNumber }: Model) {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);
    const width = useWindowWidth();

    const inViewButtonBlanket = useGlobalStore((state: any) => (state.inViewButtonBlanket))


    const effect = useSpring({
        scale: blockNumber === activeNumber ? 1 : 0,
        config: { duration: 300, easing: easings.easeInOutCubic },
    });

    const positionSpring = useSpring({
        z: blockNumber === activeNumber ? position[2] + 0.3 : -.3,
        config: { duration: 500, easing: easings.easeInOutCubic },
    });

    useEffect(() => {
        if(!inViewButtonBlanket && modelRef.current) {
            modelRef.current.visible = false
        } else if (modelRef.current && inViewButtonBlanket) {
            modelRef.current.visible = true
        }
    }, [inViewButtonBlanket])


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
            positionX: `${position[0] + (width > 576 ? 1.9 : -0.12)}`, positionY: `${position[1] + (width > 576 ? 0.5 : 0.3)}`, positionZ: `${position[2]}`,
        },
    });



    useFrame((state) => {
        if (!modelRef.current || !inViewButtonBlanket) return;

        const time = state.clock.getElapsedTime();
        const baseRotationX = rotation[0] + Math.sin(time * 0.5) * 0.05;  // Small oscillation in X
        const baseRotationY = rotation[1] + Math.sin(time * 0.3) * 0.05;  // Small oscillation in Y
        const baseRotationZ = rotation[2] + Math.sin(time * 0.4) * 0.05;  // Small oscillation in Z

        modelRef.current.position.z = positionSpring.z.get();
        modelRef.current.scale.set(effect.scale.get(), effect.scale.get(), effect.scale.get());

        if (effect.scale.get() < 0.5) {
            modelRef.current.visible = false;
        } else {
            modelRef.current.visible = true;
        }

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
                baseRotationX + coordinatesRef.x * 0.03,
                baseRotationY + coordinatesRef.y * 0.03,
                baseRotationZ
            );
        }
    });

    
    return (
        <group ref={modelRef}
            position={position}
            rotation={rotation}
            scale={0}
        >
            <primitive
                object={scene.clone()}
                scale={20}
            />
        </group>
    );
}
