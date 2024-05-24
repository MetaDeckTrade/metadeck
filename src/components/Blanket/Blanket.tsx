'use client'

import { Suspense, useRef, MutableRefObject} from 'react'
import Model from './Model/Model'
import dynamic from 'next/dynamic'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'

const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,

})

interface Blanket {
    containerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstContainerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    firstCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    secondCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    thirdCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    fourthCustomRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
}

export default function Blanket({containerRef, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef}: Blanket) {

    const { ref, inView } = useInView();
    const width = useWindowWidth()    

    return(
        <div ref={ref} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: '-1'}}>
            <PageView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1'}}>
                <Suspense fallback>
                    <Model firstCustomRef={firstCustomRef} secondCustomRef={secondCustomRef} thirdCustomRef={thirdCustomRef} fourthCustomRef={fourthCustomRef} firstContainerRef={firstContainerRef} inView={inView} containerRef={containerRef}></Model>
                    <ambientLight intensity={.4} />
                    <pointLight position={[20, 30, 10]}  intensity={1}/>
                    <directionalLight color='white' intensity={0.8} position={[0, 0, 10]}></directionalLight>
                    <pointLight position={[-10, -10, -10]} color='blue' />
                    <PerspectiveCamera makeDefault fov={40} position={[0, 0, width < 1440 ? 9 : 7]} />
                    <Preload all></Preload>
                </Suspense>
            </PageView>
        </div>
    )    
}