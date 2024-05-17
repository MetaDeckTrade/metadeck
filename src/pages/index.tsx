import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense, useRef, MutableRefObject} from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import Blanket from '@/components/Blanket/Blanket'




export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
            <TradingCompanion />
            <WhyMetaDeck />
            <Costomizable />
            <WrapperExplore />
            <Blanket containerRef={containerRef}></Blanket>
        </div>
    )
}
