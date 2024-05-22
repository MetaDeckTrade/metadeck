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
    firstContainerRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    position: any,
    rotation: any,
    url: string,
    blockNumber: number,
    activeNumber: number,
}

export default function ButtonModels({ containerRef, inView, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef, rotation, position, url, blockNumber, activeNumber }: Model) {
    const { scene: model } = useGLTF(url);
    const modelRef = useRef<THREE.Object3D>(null);
    const materialsRef = useRef<any[]>([]);
    const width = useWindowWidth();

    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if (!inView) return;
        if (inView) {
            setAnimatedOnce(true);
        }
    }, [inView]);

    const effect = useSpring({
        opacity: blockNumber === activeNumber ? 1 : 0,
        config: { duration: 700, easing: easings.easeInOutCubic },
        delay: 300,
    });

    const positionSpring = useSpring({
        z: blockNumber === activeNumber ? position[2] : -1,
        config: { duration: 500, easing: easings.easeInOutCubic },
    });

    useMemo(() => {
        model.traverse((object: any) => {
            if (object.isMesh && object.material) {
                const material = object.material.clone();
                material.transparent = true;
                material.depthWrite = false;
                object.material = material;
                material.onBeforeCompile = (shader: any) => {
                    shader.uniforms.uOpacity = { value: 1.0 };
                    shader.fragmentShader = `
                        uniform float uOpacity;
                        ${shader.fragmentShader.replace(
                            `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
                            `gl_FragColor = vec4( outgoingLight, diffuseColor.a * uOpacity );`
                        )}
                    `;
                    materialsRef.current.push(shader.uniforms.uOpacity);
                };
                material.needsUpdate = true;
            }
        });
    }, [model]);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.position.z = positionSpring.z.get();
        }
        materialsRef.current.forEach((uniform: any) => {
            uniform.value = effect.opacity.get();
        });
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
