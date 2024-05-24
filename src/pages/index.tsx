import Head from 'next/head'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import SuccessStories from '@/components/pageBlock/mainPage/SuccessStories/SuccessStories'
import JoinMetaDeckCommunity from '@/components/pageBlock/mainPage/JoinMetaDeckCommunity/JoinMetaDeckCommunity'


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
                <Costomizable />
                <WrapperExplore />
                {/* <Blanket containerRef={containerRef}></Blanket> */}
                <SuccessStories />
                <JoinMetaDeckCommunity />
            </div>
        </>

    )
}
