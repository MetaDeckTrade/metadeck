'use client'

import { Suspense, useRef, MutableRefObject, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import FooterModel from './Models/FooterModel'
import styled from 'styled-components'
import { media, rm } from '@/styles/utils'
import useGlobalStore from '@/store/store'

const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,
})

interface Blanket {
    blockRef?: MutableRefObject<HTMLElement | HTMLDivElement | null>,
}

const StyledFooterBlanket = styled.div`
    position: relative;
    width: 100%;
    height: ${rm(900)};
    position: relative;

    ${media.xsm`
        height: ${rm(500)}
    `}
`


export default function FooterBlanket({blockRef}: Blanket) {

    const width = useWindowWidth()    
    const [ref, inView] = useInView()

    const setFooterBlanket = useGlobalStore((state: any) => (state.setinViewFooterBlanket))

    useEffect(() => {
        if(inView) {
            setFooterBlanket(true)
        } else {
            setFooterBlanket(false)
        }
    }, [inView])

    return(
        <StyledFooterBlanket ref={ref}>
            <PageView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '17'}}>
                <Suspense fallback>
                    <FooterModel position={[width > 1024 ? -0.7 : (width < 576 ? 0 : 1), width > 1024 ? -0.5 : (width < 576 ? -0.4 : -0.2), -1.3]} rotation={[0.8, 3.4, 0.1]}></FooterModel>
                    <ambientLight intensity={4} />
                    <pointLight position={[1.855, 3.411, -1.345]}  intensity={1} decay={2.54}/>
                    <directionalLight color='white' intensity={0.8} position={[0, 0, 10]}></directionalLight>
                    <pointLight position={[-10, -10, -10]} color='blue' />
                    <PerspectiveCamera makeDefault fov={40} position={[0, 0, width > 1024 ? 4 : 6]} />
                </Suspense>
                <Preload all></Preload>
            </PageView>
        </StyledFooterBlanket>
    )    
}