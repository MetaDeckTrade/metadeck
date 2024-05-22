import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense, useRef, MutableRefObject} from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import Blanket from '@/components/Blanket/Blanket'
import SuccessStories from '@/components/pageBlock/mainPage/SuccessStories/SuccessStories'
import JoinMetaDeckCommunity from '@/components/pageBlock/mainPage/JoinMetaDeckCommunity/JoinMetaDeckCommunity'
import SimplicityMeetsPower from '@/components/pageBlock/mainPage/SimplicityMeetsPower/SimplicityMeetsPower'
import CompatibleWhereCounts from '@/components/pageBlock/mainPage/CompatibleWhereCounts/CompatibleWhereCounts'
import { useWindowWidth } from '@react-hook/window-size'



export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const metaContainerRef = useRef<HTMLDivElement | null>(null)
    const customizableFirstRef = useRef<HTMLDivElement | null>(null)
    const customizaSecondRef = useRef<HTMLDivElement | null>(null)
    const customizaThirdRef = useRef<HTMLDivElement | null>(null)
    const customizalFourthRef = useRef<HTMLDivElement | null>(null)

    const width = useWindowWidth()

    return (
        <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
            <div style={{position: 'relative', height: '100%'}}>
                {width > 1024 && <div style={{position: 'sticky', top: 0, left: 0, marginBottom: '100vh', marginTop: '-100vh'}}>
                    <Blanket firstContainerRef={metaContainerRef} firstCustomRef={customizableFirstRef} secondCustomRef={customizaSecondRef} thirdCustomRef={customizaThirdRef} fourthCustomRef={customizalFourthRef} containerRef={containerRef}></Blanket>
                </div>}
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
    )
}
