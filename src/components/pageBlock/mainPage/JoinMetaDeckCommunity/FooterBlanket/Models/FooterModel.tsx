import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { PageView } from "@/layouts/CanvasLayout/components/PageView";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { Preload, useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useInView } from "react-intersection-observer";
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

    useFrame(() => {

        if(!footerBlanket) return

        if(modelRef.current && width > 1024) {
            modelRef.current.rotation.x = rotation[0] + coordinatesRef.x * 0.1
            modelRef.current.rotation.y = rotation[1] + coordinatesRef.y * 0.1
        }

    })

    return (
        <primitive
            ref={modelRef}
            scale={18}
            position={position}
            rotation={rotation}
            object={scene.clone()}
        />
    );
}