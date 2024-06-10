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
    position: Array<number>,
    rotation: Array<number>,
}

export default function FooterModel({ rotation, position}: Model) {
    const { scene } = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);

    const footerBlanket = useGlobalStore((state: any) => (state.inViewFooterBlanket))


    const width = useWindowWidth();

    useEffect(() => {
        if(!footerBlanket && modelRef.current) {
            modelRef.current.visible = false
        } else if (modelRef.current && footerBlanket) {
            modelRef.current.visible = true
        }
    }, [footerBlanket])

    useFrame((state) => {

        if(!footerBlanket) return

        const time = state.clock.getElapsedTime();
        const baseRotationX = rotation[0] + Math.sin(time * 0.5) * 0.05;
        const baseRotationY = rotation[1] + Math.sin(time * 0.3) * 0.05;  
        const baseRotationZ = rotation[2] + Math.sin(time * 0.4) * 0.05; 

        if(modelRef.current && width > 1024) {
            modelRef.current.rotation.set(
                baseRotationX + coordinatesRef.x * 0.05,
                baseRotationY + coordinatesRef.y * 0.05,
                baseRotationZ
            );
        } else if (modelRef.current) {
            modelRef.current.rotation.set(
                baseRotationX,
                baseRotationY,
                baseRotationZ
            );
        }

    })

    return (
        <primitive
            ref={modelRef}
            scale={width > 576 ? 20 : 30}
            position={position}
            rotation={rotation}
            object={scene.clone()}
        />
    );
}