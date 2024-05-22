import { useSpringTrigger } from "@/hooks/useSpringTrigger";
import { useWindowWidth } from "@react-hook/window-size";
import { useSpring } from "@react-spring/three";
import { Preload, useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
import { useInView } from "react-intersection-observer";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easings } from "@react-spring/web";
import { lerp } from "three/src/math/MathUtils.js";

interface ModelProps {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    inView: any,
    firstContainerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
}

const progressDifference = 0.0005;

const progressPc = {
    1: 0.061,
    2: 0.13,
    3: 0.235,
}

export default function Model({ containerRef, inView, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef}: ModelProps) {
    const model = useGLTF('/models/model.glb');
    const modelRef = useRef<THREE.Object3D>(null);
    const progressRef = useRef<number>(0);
    const materialsRef = useRef<any[]>([]);

    const [stage, setStage] = useState<number>(0);
    const [progress, setProgress] = useState<any>(progressPc);

    const width = useWindowWidth();
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if (!inView) return;
        setAnimatedOnce(true);
    }, [inView]);

    const effect = useSpring({
        opacity: animatedOnce ? 1 : 0,
        y: animatedOnce ? -1.6 : -4.6,
        config: { duration: 10000, easing: easings.easeInOutCubic },
        delay: 1800,
    });

    useMemo(() => {
        model.scene.traverse((object: any) => {
            if (object.isMesh && object.material) {
                const clonedMaterial = object.material.clone();
                clonedMaterial.transparent = true;
                clonedMaterial.depthWrite = false;
                object.material = clonedMaterial;
                clonedMaterial.onBeforeCompile = (shader: any) => {
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
            }
        });
    }, [model]);

    useSpringTrigger({
        trigger: containerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: { value: '0' },
        to: { value: '10' },
        onChange: (state) => {
            progressRef.current = state.value.progress;
        }
    });

    const { values: progressValues } = useSpringTrigger({
        trigger: firstContainerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "0.9", y: "3.3", z: "0",
            positionX: "1.5", positionY: "-1.6", positionZ: "0",
        },
        to: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",
        },
    });

    const { values: progressValuesSecond } = useSpringTrigger({
        trigger: firstCustomRef,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "1.1", y: "2.8", z: "-0.2",
            positionX: "1.5", positionY: "-0.5", positionZ: "0",
        },
        to: {
            x: "0.8", y: "3", z: "0",
            positionX: "-2", positionY: "-1.6", positionZ: "-2",
        },
    });

    const { values: progressValuesThird } = useSpringTrigger({
        trigger: thirdCustomRef,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "0.8", y: "3", z: "0",
            positionX: "-2", positionY: "-1.6", positionZ: "-2",
        },
        to: {
            x: "-0.1", y: "3.2", z: "0",
            positionX: "0", positionY: "0", positionZ: "2",
        },
    });

    const { values: progressValuesFourth } = useSpringTrigger({
        trigger: fourthCustomRef,
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: true,
        from: {
            x: "-0.1", y: "3.2", z: "0",
            positionX: "0", positionY: "0", positionZ: "2",
        },
        to: {
            x: "-0.3", y: "3.2", z: "0",
            positionX: "0", positionY: "0", positionZ: "1.8",
        },
    });

    useFrame(() => {
        if (modelRef.current) {
            if (progressRef.current < progress[1]) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValues.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValues.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValues.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValues.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValues.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValues.positionZ.get(), 0.05)
                );
            } else if (progressRef.current > progress[1] + progressDifference && progressRef.current < progress[2]) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesSecond.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesSecond.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesSecond.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesSecond.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesSecond.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesSecond.positionZ.get(), 0.05)
                );
            } else if (progressRef.current > progress[2] + progressDifference && progressRef.current < progress[3]) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesThird.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesThird.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesThird.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesThird.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesThird.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesThird.positionZ.get(), 0.05)
                );
            } else if (progressRef.current > progress[3] + progressDifference) {
                modelRef.current.rotation.set(
                    lerp(modelRef.current.rotation.x, +progressValuesFourth.x.get(), 0.05),
                    lerp(modelRef.current.rotation.y, +progressValuesFourth.y.get(), 0.05),
                    lerp(modelRef.current.rotation.z, +progressValuesFourth.z.get(), 0.05)
                );
                modelRef.current.position.set(
                    lerp(modelRef.current.position.x, +progressValuesFourth.positionX.get(), 0.05),
                    lerp(modelRef.current.position.y, +progressValuesFourth.positionY.get(), 0.05),
                    lerp(modelRef.current.position.z, +progressValuesFourth.positionZ.get(), 0.05)
                );
            }
        }

        materialsRef.current.forEach((uniform: any) => {
            uniform.value = effect.opacity.get();
        });
    });

    return (
        <primitive
            ref={modelRef}
            scale={20}
            rotation={[0.9, 3.3, 0]}
            object={model.scene.clone()}
        />
    );
}



// import { useSpringTrigger } from "@/hooks/useSpringTrigger";
// import { PageView } from "@/layouts/CanvasLayout/components/PageView";
// import { useWindowWidth } from "@react-hook/window-size";
// import { useSpring } from "@react-spring/three";
// import { Preload, useGLTF } from "@react-three/drei";
// import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
// import { useInView } from "react-intersection-observer";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { easings } from "@react-spring/web";

// interface Model {
//     containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
//     inView: any
// }

// const stages: any = {
//     0: {
//         x: 0,
//         y: 0,
//         z: 0,
//     },
//     1: {
//         x: -3,
//         y: -3,
//         z: -3,
//     }
// };

// export default function Model({ containerRef, inView }: Model) {
//     const { scene: model } = useGLTF('/models/model.glb');
//     const modelRef = useRef<THREE.Object3D>(null);

//     const [stage, setStage] = useState<number>(0);
//     const [stageValues, setStageValues] = useState<any>(stages[stage])

//     const width = useWindowWidth();

//     const [animatedOnce, setAnimatedOnce] = useState(false);

//     useEffect(() => {
//         console.log(modelRef.current);
//         if (!inView) return;
//         if (inView) {
//             setAnimatedOnce(true);
//         }
//     }, [inView]);


//     const effect = useSpring({
//         opacity: animatedOnce ? 1 : 0,
//         y: animatedOnce ? -1.6 : -4.6,
//         config: { duration: 700, easing: easings.easeInOutCubic },
//         delay: 1800,
//     });


//     useEffect(() => {
//         setStageValues(stages[stage])
//         console.log(stage, stageValues)
//     }, [stage])


//     const { values: progressValues } = useSpringTrigger({
//         trigger: containerRef,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//         from: {
//             x: '0',
//             y: '0',
//             z: '0'
//         },
//         to: {
//             x: `${stageValues.x}`,
//             y: `${stageValues.y}`,
//             z: `${stageValues.z}`
//         },
//         onChange: (state) => {
//             // console.log(state.value.progress);

//             console.log(progressValues.x.get())

//             if (state.value.progress > 0.128) {
//                 setStage(1);
//             }
//         }
//     });

//     useFrame(() => {
//         if (modelRef.current) {
//             modelRef.current.position.y = effect.y.get();
//             //@ts-expect-error
//             modelRef.current.children[1].material.opacity = effect.opacity.get(); //when the model has material change to model's material not children

//             modelRef.current.rotation.set(
//                 +progressValues.x.get(),
//                 +progressValues.y.get(),
//                 +progressValues.z.get()
//             );
//         }
//     });

//     return (
//         <primitive
//             ref={modelRef}
//             scale={20}
//             position={[1.5, -1.6, 0]}
//             rotation={[0.9, 3.3, 0]}
//             object={model}
//         />
//     );
// }


// import { useSpringTrigger } from "@/hooks/useSpringTrigger";
// import { useSpring } from "@react-spring/three";
// import { Preload, useGLTF } from "@react-three/drei";
// import { useRef, MutableRefObject, useState, useEffect, useMemo } from 'react';
// import * as THREE from "three";
// import { easings } from "@react-spring/web";
// import { lerp } from "three/src/math/MathUtils.js";
// import { useFrame } from "@react-three/fiber";

// interface Model {
//     containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
//     inView: any
// }

// const stages = [
//     { x: 0, y: 0, z: 0},
//     { x: -3, y: -3, z: -3},
//     { x: -5, y: -5, z: -5},
// ];

// const getStageValues = (progress: number, stages: any, stage: number) => {
//     const totalStages = stages.length;
//     const stageIndex = stage;
//     const nextStageIndex = Math.min(stageIndex + 1, totalStages - 1);

//     const stageProgress = progress % 1;

//     const currentStage = stages[stageIndex];
//     const nextStage = stages[nextStageIndex];

//     const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

//     const x = nextStage ? lerp(currentStage.x, nextStage.x, stageProgress) : currentStage.x;
//     const y = nextStage ? lerp(currentStage.y, nextStage.y, stageProgress) : currentStage.y;
//     const z = nextStage ? lerp(currentStage.z, nextStage.z, stageProgress) : currentStage.z;

//     return { x, y, z };
// }

// export default function Model({ containerRef, inView }: Model) {
//     const { scene: model } = useGLTF('/models/model.glb');
//     const modelRef = useRef<THREE.Object3D>(null);

//     const [stage, setStage] = useState<number>(0)

//     const [animatedOnce, setAnimatedOnce] = useState(false);

//     useEffect(() => {
//         if (inView) setAnimatedOnce(true);
//     }, [inView]);

//     const effect = useSpring({
//         opacity: animatedOnce ? 1 : 0,
//         y: animatedOnce ? -1.6 : -4.6,
//         config: { duration: 700, easing: easings.easeInOutCubic },
//         delay: 1800,
//     });

//     const { values: progressValues, state } = useSpringTrigger({
//         trigger: containerRef,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//         from: { x: '0', y: '0', z: '0' },
//         to: { x: '0', y: '0', z: '0' },
//         onChange: (triggerState) => {
//             if(modelRef.current) {


//                 if(triggerState.value.progress > 0.128) {
//                     const { x, y, z } = getStageValues(triggerState.value.progress, stages, 1);
//                     modelRef.current.rotation.set(x, y, z);
//                 } else {
//                     const { x, y, z } = getStageValues(triggerState.value.progress, stages, 0);
//                     modelRef.current.rotation.set(x, y, z);
//                 }
//             }
//         }
//     });

//     useFrame(() => {
//         if (modelRef.current) {
//             modelRef.current.position.y = effect.y.get();
//             //@ts-expect-error
//             modelRef.current.children[1].material.opacity = effect.opacity.get(); //when the model has material change to model's material not children

//             // modelRef.current.rotation.set(
//             //     +progressValues.x.get(),
//             //     +progressValues.y.get(),
//             //     +progressValues.z.get()
//             // );
//         }
//     });

//     return (
//         <primitive
//             ref={modelRef}
//             scale={20}
//             // position={[1.5, -1.6, 0]}
//             rotation={[0.9, 3.3, 0]}
//             object={model}
//         />
//     );
// }

