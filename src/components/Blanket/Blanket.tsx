'use client'

import { Suspense, useRef, MutableRefObject, useEffect} from 'react'
import Model from './Model/Model'
import dynamic from 'next/dynamic'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import styled from 'styled-components'
import { media, rm } from '@/styles/utils'
import useGlobalStore from '@/store/store'

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
    lastContainerRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
    mPointer: any,
}

const StyledBlanket = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    
    >:first-child{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

export default function Blanket({containerRef, firstContainerRef, firstCustomRef, secondCustomRef, thirdCustomRef, fourthCustomRef, mPointer, lastContainerRef}: Blanket) {

    const { ref, inView } = useInView();
    const width = useWindowWidth()    

    const setBlanket = useGlobalStore((state: any) => (state.setInViewBlanket))


    useEffect(() => {
        if(inView) {
            setBlanket(true)
        } else {
            setBlanket(false)
        }
    }, [inView])

    return(
        <StyledBlanket ref={ref} >
            <PageView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1'}}>
                <Suspense fallback>
                    <Model lastContainerRef={lastContainerRef} mPointer={mPointer} firstCustomRef={firstCustomRef} secondCustomRef={secondCustomRef} thirdCustomRef={thirdCustomRef} fourthCustomRef={fourthCustomRef} firstContainerRef={firstContainerRef} inView={inView} containerRef={containerRef}></Model>
                    <pointLight position={[1.855, 3.411, -1.345]}  intensity={1} decay={2.54}/>
                    <directionalLight color='white' intensity={0.5} position={[0, 0, 10]}></directionalLight>
                    <ambientLight intensity={2} />
                    <PerspectiveCamera makeDefault fov={40} position={[0, 0, width < 1440 ? (width < 1024 ? (width <= 576 ? 9 : 7) : 9) : 7]}/>
                    <Preload all></Preload>
                </Suspense>
            </PageView>
        </StyledBlanket>
    )    
}