import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { PageView } from "@/layouts/CanvasLayout/components/PageView";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { Preload, useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";
import { lerp } from "three/src/math/MathUtils.js";

interface Model {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: any,
    firstContainerRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    position: any,
    rotation: any,
}

export default function BlanketModal({ containerRef, inView, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef, rotation, position}: Model) {
    const { scene: model } = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(0)


    const width = useWindowWidth();

    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if (!inView) return;
        if (inView) {
            setAnimatedOnce(true);
        }
    }, [inView]);

    const effect = useSpring({
        opacity: animatedOnce ? 1 : 0,
        y: animatedOnce ? position[1] : -4.6,
        config: { duration: 700, easing: easings.easeInOutCubic},
        delay: 300,
    });

    useSpringTrigger({
        trigger: containerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: {
            value: '0'
        },
        to: {
            value: '10' 
        },
        onChange: (state) => {
            progressRef.current = state.value.progress
        }
    });


    return (
        <primitive
            ref={modelRef}
            scale={20}
            position={position}
            rotation={rotation}
            object={model.clone()}
        />
    );
}