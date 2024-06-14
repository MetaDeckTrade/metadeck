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

export default function TestModel({ inView, rotation, position, containerRef, activeNumber }: Model) {
    const { scene } = useGLTF('/models/buttonsBlunket.glb');
    const modelRef = useRef<THREE.Object3D>(null);


    const model = useMemo(() => {
        const clonedScene = scene.clone();

                //lines opacity and z
        const line1 = clonedScene.getObjectByName('line_1') as THREE.Group;
        const line2 = clonedScene.getObjectByName('line_2') as THREE.Group;
        const line3 = clonedScene.getObjectByName('line_3') as THREE.Group;

        const applyShader = (object: THREE.Object3D) => {
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    console.log(child.material)

                    const material = child.material.clone()


                    material.onBeforeCompile = (shader: THREE.Shader) => {
                        console.log('onBeforeCompile called');
                        shader.fragmentShader = 'uniform float uOpacity; ' +shader.fragmentShader

                        shader.fragmentShader = shader.fragmentShader.replace('#include <dithering_fragment>', `
                            #include <dithering_fragment>

                            gl_FragColor.rgb *= uOpacity;
                        `)
                        console.log(shader, 'f')
                    }

                    child.material = material

                    // console.log(originalMaterial)

                    // const uniforms = {
                    //     uOpacity: { value: opacity },
                    //     uColor: { value: new THREE.Color(originalMaterial.color) },
                    //     uTexture: { value: originalMaterial.map },
                    // };
        
                }
            });
        };
        
        if (line1) applyShader(line1);
        if (line2) applyShader(line2);
        if (line3) applyShader(line3);

        return clonedScene;
    }, [scene]);


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
