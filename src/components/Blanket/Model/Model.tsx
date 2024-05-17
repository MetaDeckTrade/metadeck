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

interface Model {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: any
}

export default function Model({ containerRef, inView}: Model) {
    const { scene: model } = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);

    const [stage, setStage] = useState<number>(0)

    const width = useWindowWidth();

    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        console.log(modelRef.current)
        if (!inView) return;
        if (inView) {
            setAnimatedOnce(true);
        }
    }, [inView]);

    const effect = useSpring({
        opacity: animatedOnce ? 1 : 0,
        y: animatedOnce ? -1.6 : -4.6,
        config: { duration: 700, easing: easings.easeInOutCubic},
        delay: 1800,
    });

    const { values: progressValues } = useSpringTrigger({
        trigger: containerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: stage === 0 ? "0" : "1", 
            y: stage === 0 ? "0" : "1", 
            z: stage === 0 ? "0" : "1" 
        },
        to: {
            x: stage === 0 ? "1" : "-3", 
            y: stage === 0 ? "1" : "-3", 
            z: stage === 0 ? "1" : "-3" 
        },
        onChange: (state) => {
            console.log(state.value.progress);
             
            if(state.value.progress > 0.128) {
                setStage(1)
            }
        }
    });

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.position.y = effect.y.get();
            //@ts-expect-error
            modelRef.current.children[1].material.opacity = effect.opacity.get() //when the model has material change to model's material not children

            modelRef.current.rotation.set(+progressValues.x.get(), +progressValues.y.get(), +progressValues.z.get())


            // modelRef.current.children[0].children[0].children.forEach((item: THREE.Object3D) => {
            //     // item.children.material.needsUpdate = true
            //     // item.children.material.opacity = effect.opacity.get()
            //     console.log(item)
            // });

            // console.log(modelRef.current.children[0].children[0].children[0].children[0].material.opacity)

        }
    });

    return (
        <primitive
            ref={modelRef}
            scale={20}
            position={[1.5, -1.6, 0]}
            rotation={[0.9, 3.3, 0]}
            object={model}
        />
    );
}