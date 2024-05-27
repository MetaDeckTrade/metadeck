import Head from 'next/head'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import SuccessStories from '@/components/pageBlock/mainPage/SuccessStories/SuccessStories'
import JoinMetaDeckCommunity from '@/components/pageBlock/mainPage/JoinMetaDeckCommunity/JoinMetaDeckCommunity'
import SimplicityMeetsPower from '@/components/pageBlock/mainPage/SimplicityMeetsPower/SimplicityMeetsPower'
import CompatibleWhereCounts from '@/components/pageBlock/mainPage/CompatibleWhereCounts/CompatibleWhereCounts'
import { useWindowWidth } from '@react-hook/window-size'
import Blanket from '@/components/Blanket/Blanket'
import styled from 'styled-components'
import { media, rm } from '@/styles/utils'
import { Vector3 } from 'three/src/Three.js'

const StlyedWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    ${media.md`
        top: ${rm(470)} !important;
        padding-bottom: ${rm(470)} !important;
    `}

    ${media.xsm`
        /* height: 100vh; */
        padding-bottom: 0;
        top: ${rm(450)} !important;
    `}
`


export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const metaContainerRef = useRef<HTMLDivElement | null>(null)
    const customizableFirstRef = useRef<HTMLDivElement | null>(null)
    const customizaSecondRef = useRef<HTMLDivElement | null>(null)
    const customizaThirdRef = useRef<HTMLDivElement | null>(null)
    const customizalFourthRef = useRef<HTMLDivElement | null>(null)

    const mPointer: any = new Vector3(0, 0, 0)

    
    return (
        <>
            <Head>
                <title>Meta Deck | The Ultimate Trading Companion</title>
            </Head>
            <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
                <div style={{position: 'relative', height: '100%'}}>
                    <StlyedWrapper>
                        <div style={{ position: 'relative', height: '100%', width: '100%'}}>
                            <div style={{position: 'sticky', top: 0, left: 0, marginBottom: '100vh', marginTop: '-100vh'}}>
                                <Blanket mPointer={mPointer} firstContainerRef={metaContainerRef} firstCustomRef={customizableFirstRef} secondCustomRef={customizaSecondRef} thirdCustomRef={customizaThirdRef} fourthCustomRef={customizalFourthRef} containerRef={containerRef}></Blanket>
                            </div>
                        </div>
                    </StlyedWrapper>
                    <div ref={metaContainerRef}>
                        <TradingCompanion />
                        <WhyMetaDeck />
                    </div>
                    <Costomizable firstRef={customizableFirstRef} secondRef={customizaSecondRef} thirdRef={customizaThirdRef} fourthRef={customizalFourthRef}/>
                </div>
                <CompatibleWhereCounts />
                <WrapperExplore />
                <SuccessStories />
                <JoinMetaDeckCommunity />
            </div>
        </>
    )
}
