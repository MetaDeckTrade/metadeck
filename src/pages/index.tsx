import Head from 'next/head'

import { useRef, useState } from 'react'
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
import { GetStaticProps } from 'next'

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
        padding-bottom: 0;
        top: ${rm(0)} !important;

        >:first-child{
            top: ${rm(450)}
        }
    `}
`

const LastStyledContainer = styled.div`
    height: 25%;
    top: 90%;
    position: absolute;
    left: 0;
    width: 100%;
`
const FirstStyledContainer = styled.div`
    height: 25%;
    top: 0;
    position: absolute;
    left: 0;
    width: 100%;
`
const SecondStyledContainer = styled.div`
    height: 30%;
    top: 25%;
    position: absolute;
    left: 0;
    width: 100%;
`
const ThirdStyledContainer = styled.div`
    height: 35%;
    top: 55%;
    position: absolute;
    left: 0;
    width: 100%;
`

export default function Home({ initialData }: any) {

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
                <title key="title">{initialData?.title || 'default title'}</title>
                <meta property='og:title' content={initialData?.title || 'default title'} />
                <meta property='og:site_name' content={initialData?.title || 'default title'} />
                <meta name='author' content={initialData?.author || 'default author'} />
                <meta name='designer' content={initialData?.author || 'default author'} />
                <meta name='publisher' content={initialData?.author || 'default author'} />
                <meta name='description' content={initialData?.description || 'default description'} key="description" />
                <meta property='og:description' content={initialData?.description || 'default description'} />
                <meta name='keywords' content={initialData?.keywords || 'default keywords'} />
                <meta property='og:image' content={initialData?.appleIcon114x114?.filename ? initialData?.appleIcon114x114?.filename : '/icons/apple-icon-114x114.png'} />
                <link rel='apple-touch-icon' href={initialData?.appleIcon72x72?.filename ? initialData?.appleIcon72x72?.filename : '/icons/apple-icon-72x72.png'} />
                <link rel='apple-touch-icon' sizes='16x16' href={initialData?.favicon16x16?.filename ? initialData?.favicon16x16?.filename : '/icons/favicon-16x16.png'} />
                <link rel='apple-touch-icon' sizes='32x32' href={initialData?.favicon32x32?.filename ? initialData?.favicon32x32?.filename : '/icons/favicon-32x32.png'} />
                <link rel='apple-touch-icon' sizes='180x180' href={initialData?.appleIcon180x180?.filename ? initialData?.appleIcon180x180?.filename : '/icons/apple-icon-180x180.png'} />
                <link rel='mask-icon' color='#000000' href={initialData?.appleIcon72x72?.filename ? initialData?.appleIcon72x72?.filename : '/icons/apple-icon-72x72.png'} />
                <link rel='apple-touch-startup-image' href={initialData?.appleIcon72x72?.filename ? initialData?.appleIcon72x72?.filename : '/icons/apple-icon-72x72.png'} />
                <link rel="manifest" href={initialData?.favicon16x16?.filename ? initialData?.favicon16x16?.filename : "/icons/manifest.json"} />
                <meta name="msapplication-TileImage" content={initialData?.msIcon144x144?.filename ? initialData?.msIcon144x144?.filename : "/icons/ms-icon-144x144.png"} />
                <link rel='manifest' href={initialData?.favicon16x16?.filename ? initialData?.favicon16x16?.filename : '/icons/manifest.json'} />
                <link rel="icon" type="image/x-icon" href={initialData?.favicon16x16?.filename ? initialData?.favicon16x16?.filename : '/icons/favicon-16x16.png'} />
            </Head>
            <Burger dataHeader={ data?.length ? getStoryblokSectionDataW(data, 'header') : null } dataFooter={data?.length ? getStoryblokSectionDataW(data, "footer") : null} dataNetwork={ data?.length ? getStoryblokSectionDataW(data, 'floatingActionBar') : null }/>
            <Header data={ data?.length ? getStoryblokSectionDataW(data, 'header') : null } />
            <Network data={data?.length ? getStoryblokSectionDataW(data, "floatingActionBar") : null}/>

            <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
                <div style={{position: 'relative', height: '100%'}}>
                    <StlyedWrapper>
                        <div style={{ position: 'relative', height: '100%', width: '100%'}}>
                            <FirstStyledContainer ref={metaContainerRef} ></FirstStyledContainer>
                            <SecondStyledContainer ref={customizableFirstRef} ></SecondStyledContainer>
                            <ThirdStyledContainer ref={customizaSecondRef} ></ThirdStyledContainer>
                            {/* <div ref={customizaThirdRef} style={{position: 'absolute', height: '100vh', top: 0, left: 0}}></div> */}
                            {/* <div ref={customizalFourthRef} style={{position: 'absolute', height: '100vh', top: 0, left: 0}}></div> */}
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
                    <Costomizable data={ data?.length ? getStoryblokSectionDataW(data, "whyMetaDeck") : null } firstRef={customizableFirstRef} secondRef={customizaSecondRef} thirdRef={customizaThirdRef} fourthRef={customizalFourthRef}/>
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

export const getStaticProps = (async () => {
    const version = process.env.NEXT_PUBLIC_STORYBLOK_DATA_VERSION;
    const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN
    const res = await fetch(`https://api.storyblok.com/v2/cdn/stories/metadata?version=${version}&token=${token}`, { next: { revalidate: 10 }, headers: { 'cache-control': 'no-cache', 'pragma': 'no-cache' } })
    const repo = await res.json()
    const page = repo.story.content
    return { props: { initialData: page }, revalidate: 10 }
}) satisfies GetStaticProps<{
    initialData: any
}>