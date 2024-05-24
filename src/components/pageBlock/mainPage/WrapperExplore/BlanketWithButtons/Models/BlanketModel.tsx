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
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: boolean,
    position: Array<number>,
    rotation: Array<number>,
}

export default function BlanketModal({ inView, rotation, position, containerRef}: Model) {
    const { scene } = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(0)

    const inViewButtonBlanket = useGlobalStore((state: any) => (state.inViewButtonBlanket))

    const width = useWindowWidth();

    const [animatedOnce, setAnimatedOnce] = useState(false);

    const model = useMemo(() => {
        const model = scene.clone()

        return model
    }, [scene])

    useEffect(() => {
        if (!inView) return;
        if (inView) {
            setAnimatedOnce(true);
        }
    }, [inView]);

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
            positionX: "0", positionY: `${position[1] + 0.5}`, positionZ: `${position[2]}`,
        },
        onChange: (state) => {
            progressRef.current = state.value.progress;
        }
    });


    useFrame(() => {
        if(!inViewButtonBlanket) return

        if(modelRef.current && width < 1024) {
            modelRef.current.rotation.set(+progressValues.x.get(), +progressValues.y.get(), +progressValues.z.get())
            modelRef.current.position.set(+progressValues.positionX.get(), +progressValues.positionY.get(), +progressValues.positionZ.get())
        } else if(modelRef.current) {
            modelRef.current.rotation.x = rotation[0] + coordinatesRef.x * 0.01
            modelRef.current.rotation.y = rotation[1] + coordinatesRef.y * 0.01
        }
    })

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