import Head from 'next/head'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import SuccessStories from '@/components/pageBlock/mainPage/SuccessStories/SuccessStories'
import JoinMetaDeckCommunity from '@/components/pageBlock/mainPage/JoinMetaDeckCommunity/JoinMetaDeckCommunity'
import CompatibleWhereCounts from '@/components/pageBlock/mainPage/CompatibleWhereCounts/CompatibleWhereCounts'
import Blanket from '@/components/Blanket/Blanket'
import styled from 'styled-components'
import { media, rm } from '@/styles/utils'
import { Vector3 } from 'three/src/Three.js'
import useFetchData from '@/hooks/useFetchData'
import Burger from '@/components/layout/Burger/Burger'
import Header from '@/components/layout/Header/Header'
import Network from '@/components/layout/Network/Network'
import { getStoryblokSectionDataW } from '@/api/useStoryblok'
import Footer from '@/components/layout/Footer/Footer'

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
        top: ${rm(0)} !important;

        >:first-child{
            top: ${rm(450)}
        }
    `}
`

const LastStyledContainer = styled.div`
    height: 100vh;
    bottom: -50vh;
    position: absolute;
    left: 0;
    width: 100%;
`

export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const metaContainerRef = useRef<HTMLDivElement | null>(null)
    const customizableFirstRef = useRef<HTMLDivElement | null>(null)
    const customizaSecondRef = useRef<HTMLDivElement | null>(null)
    const customizaThirdRef = useRef<HTMLDivElement | null>(null)
    const customizalFourthRef = useRef<HTMLDivElement | null>(null)
    const lastAnimationRef = useRef<HTMLDivElement | null>(null)

    const mPointer: any = new Vector3(0, 0, 0)
    const [data, setData] = useState([])
    useFetchData('home', setData)
    
    return (
        <>
            <Head>
                <title>Meta Deck | The Ultimate Trading Companion</title>
            </Head>
            <Burger dataHeader={ data?.length ? getStoryblokSectionDataW(data, 'header') : null } dataFooter={data?.length ? getStoryblokSectionDataW(data, "footer") : null} dataNetwork={ data?.length ? getStoryblokSectionDataW(data, 'floatingActionBar') : null }/>
            <Header data={ data?.length ? getStoryblokSectionDataW(data, 'header') : null } />
            <Network data={data?.length ? getStoryblokSectionDataW(data, "floatingActionBar") : null}/>

            <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
                <div style={{position: 'relative', height: '100%'}}>
                    <StlyedWrapper>
                        <div style={{ position: 'relative', height: '100%', width: '100%'}}>
                            <div style={{position: 'sticky', top: 0, left: 0, marginBottom: '100vh', marginTop: '-100vh'}}>
                                <Blanket lastContainerRef={lastAnimationRef} mPointer={mPointer} firstContainerRef={metaContainerRef} firstCustomRef={customizableFirstRef} secondCustomRef={customizaSecondRef} thirdCustomRef={customizaThirdRef} fourthCustomRef={customizalFourthRef} containerRef={containerRef}></Blanket>
                            </div>
                        </div>
                    </StlyedWrapper>
                    <LastStyledContainer ref={lastAnimationRef}></LastStyledContainer>
                    <div ref={metaContainerRef}>
                    <TradingCompanion data={data?.length ? getStoryblokSectionDataW(data, 'theUltimate') : null }/>
                        <WhyMetaDeck data={ data?.length ? getStoryblokSectionDataW(data, "whyMetaDeck") : null }/>
                    </div>
                    <Costomizable firstRef={customizableFirstRef} secondRef={customizaSecondRef} thirdRef={customizaThirdRef} fourthRef={customizalFourthRef}/>
                </div>
                <CompatibleWhereCounts data={ data?.length ? getStoryblokSectionDataW(data, "compatible") : null }/>
                <WrapperExplore data={ data?.length ? getStoryblokSectionDataW(data, "explore") : null } simplicityMeetsPowerData={data?.length ? getStoryblokSectionDataW(data, "simplicity") : null}/>
                <SuccessStories data={ data?.length ? getStoryblokSectionDataW(data, "successStories") : null }/>
                <JoinMetaDeckCommunity data={ data?.length ? getStoryblokSectionDataW(data, "joinMetaDeckCommunity") : null }/>
            </div>
            <Footer data={data?.length ? getStoryblokSectionDataW(data, "footer") : null}/>
        </>
    )
}
