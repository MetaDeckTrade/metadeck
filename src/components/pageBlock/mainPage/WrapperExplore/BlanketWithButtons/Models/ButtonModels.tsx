import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";

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
    const modelRef = useRef<THREE.Object3D>(null);
    const width = useWindowWidth();

    const effect = useSpring({
        opacity: blockNumber === activeNumber ? 1 : 0,
        config: { duration: 300, easing: easings.easeInOutCubic },
    });

    const positionSpring = useSpring({
        z: blockNumber === activeNumber ? position[2] + 0.3 : -1,
        config: { duration: 500, easing: easings.easeInOutCubic },
    });

    const uniforms = useRef({ alpha: { value: 0 } })



    const model = useMemo(() => {
        scene.traverse((object: any) => {
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


    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.position.z = positionSpring.z.get();
        }

        uniforms.current.alpha.value = effect.opacity.get()
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
