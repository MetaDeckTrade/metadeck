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



export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <Head>
                <title>Meta Deck | The Ultimate Trading Companion</title>
            </Head>
            <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
                <TradingCompanion />
                <WhyMetaDeck />
            {/* <Costomizable /> */}
                <WrapperExplore />
                <Blanket containerRef={containerRef}></Blanket>
                <SuccessStories />
                <JoinMetaDeckCommunity />
            </div>
        </>

    )
}
