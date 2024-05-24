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

interface Model {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: boolean,
    position: Array<number>,
    rotation: Array<number>,
}

export default function BlanketModal({ inView, rotation, position}: Model) {
    const { scene } = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);


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

    const uniforms = useRef({ alpha: { value: 0 } })



    const model = useMemo(() => {
        const clonedScene = scene.clone()

        clonedScene.traverse((object: any) => {
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
        return clonedScene
    }, [scene])


    useFrame(() => {
        uniforms.current.alpha.value = effect.opacity.get()
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