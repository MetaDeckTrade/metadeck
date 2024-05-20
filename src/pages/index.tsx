import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import TradingCompanion from '@/components/pageBlock/mainPage/TradingCompanion/TradingCompanion'
import WhyMetaDeck from '@/components/pageBlock/mainPage/WhyMetaDeck/WhyMetaDeck'
import Costomizable from '@/components/pageBlock/mainPage/Costomizable/Costomizable'
import WrapperExplore from '@/components/pageBlock/mainPage/WrapperExplore/WrapperExplore'
import SuccessStories from '@/components/pageBlock/mainPage/SuccessStories/SuccessStories'
import JoinMetaDeckCommunity from '@/components/pageBlock/mainPage/JoinMetaDeckCommunity/JoinMetaDeckCommunity'
import SimplicityMeetsPower from '@/components/pageBlock/mainPage/SimplicityMeetsPower/SimplicityMeetsPower'
import CompatibleWhereCounts from '@/components/pageBlock/mainPage/CompatibleWhereCounts/CompatibleWhereCounts'

const Logo = dynamic(() => import('@/layouts/CanvasLayout/components/Examples').then((mod) => mod.Logo), { ssr: false })
const PageView = dynamic(() => import('@/layouts/CanvasLayout/components/PageView').then((mod) => mod.PageView), {
    ssr: false,
    loading: () => (<div>Loading Page Scene...</div>),
})
const Common = dynamic(() => import('@/layouts/CanvasLayout/components/Common').then((mod) => mod.Common), { ssr: false })


export default function Home() {
    return (
        // <>
        //     <Head>
        //         <title key="title">Main Page</title>
        //     </Head>
        <div style={{ height: '100%', width: '100%' }}>
            <TradingCompanion />
            <WhyMetaDeck />
           <Costomizable />
            <WrapperExplore />
            <SuccessStories />
            <JoinMetaDeckCommunity />
        </div>
        // {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        //     <PageView>
        //         <Suspense fallback={null}>
        //             <Logo scale={0.6} position={[0, 0, 0]} />
        //             <Common />

        //         </Suspense>
        //     </PageView>
        // </div> */}

        //     </>
    )
}
