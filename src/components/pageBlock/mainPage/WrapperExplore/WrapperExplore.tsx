import { useEffect, useRef, useState } from 'react';
import { Functionality, FunctionalitySubtitle, FunctionalityTitle, FunctionalityWrapperTexxt, Table, Title, TitleTable, TitleWrapper, WpapperInfo, Wrapper, WrapperImage, WrapperImageContainer, WrapperInfoTable, WrapperTable, WrapperText, WrapperTitle } from './styleWrapperExplore';
import { useSpringTrigger } from '@/hooks/useSpringTrigger';
import SimplicityMeetsPower from '../SimplicityMeetsPower/SimplicityMeetsPower';
import { useInView } from 'react-intersection-observer';
import { animated } from "@react-spring/web";
import AnimatiosPharagraphTwoT from '@/components/UI/animation/animationText/AnimationPatagraphTwo/AnimationPatagraphTwo';
import BlanketWithButtons from './BlanketWithButtons/BlanketWithButtons';
import styled from 'styled-components';
import { media, rm } from '@/styles/utils';
import Image from 'next/image';

const StlyedWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    ${media.xsm`
        padding-bottom: 0 !important;
    `}
`
interface StepsInfo {
    icon: { filename: string },
    text: string,
    _uid: string
}

interface Steps {
    title: string,
    stepsInfo: Array<StepsInfo>
}

interface Types {
    functionalitySubtitle: string,
    functionalityTitle: string,
    title: string,
    steps: Array<Steps>
}
export interface TypesSimplicity{
    description: string,
    subtitle: string,
    title: string
    imgDesktop: { filename: string },
    imgLaptop: { filename: string },
    imgMobile: { filename: string },
    imgTablet: { filename: string },
}

export default function WrapperExplore({ data, simplicityMeetsPowerData }: { data: Types , simplicityMeetsPowerData : TypesSimplicity}) {

    const stickyRef = useRef(null);
    const triggerRef = useRef<HTMLDivElement>(null!)
    const refTitle = useRef<HTMLDivElement | null>(null)
    const [numerBlock, setnumerBlock] = useState(-1)
    const [buttonNumber, setButtonNumber] = useState(0)
    const { ref: yellowRef, inView: yellowBlock } = useInView()
    const { ref: grinRef, inView: grinBlock } = useInView()
    const { ref: start, inView: startBlock } = useInView()
    const refWrapper = useRef(null)
    const [dataTableList, setdataTableList]: any = useState([])
    const refTable = useRef(null)
    const refWrapperTable = useRef(null)

    const [ref, inView] = useInView()

    const { values: titleValues } = useSpringTrigger({
        trigger: triggerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: { x: '0' },
        to: { x: '1' },
        onChange: () => {
            if (refTitle.current && titleValues) {
                const width = refTitle.current.getBoundingClientRect().width
                // @ts-expect-error
                const translateX = (width - window.innerWidth) * titleValues.x.get()
                refTitle.current.style.transform = `translate(${-translateX}px, 0px)`
            }
        }
    })
    const testRef = useRef(null)
    const { values: imageAnimated } = useSpringTrigger({
        trigger: testRef,
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        from: { y: '70%' },
        to: { y: '0%' },
    })

    useEffect(() => {
        setTimeout(() => {
            setButtonNumber(0)
        }, 100)
    }, [])

    useEffect(() => {
        if (yellowBlock && !grinBlock && numerBlock !== 1 && refWrapper.current && data?.steps && data?.steps.length) {
            // @ts-expect-error
            refWrapper.current.textContent = data?.steps?.[0].title
            setnumerBlock(1)
            setdataTableList([...data?.steps?.[0].stepsInfo])

        }
        if (grinBlock && numerBlock !== 2 && refWrapper.current) {
            setnumerBlock(2)
            // @ts-expect-error
            refWrapper.current.textContent = data?.steps?.[1].title
            setdataTableList([...data?.steps?.[1].stepsInfo])
        }
        if (startBlock && numerBlock !== 0 && refWrapper.current) {
            setnumerBlock(0)
            // @ts-expect-error
            refWrapper.current.textContent = data?.steps?.[2].title
            setdataTableList([...data?.steps?.[2].stepsInfo])
        }
    }, [yellowBlock, grinBlock, startBlock, refWrapper, data])


    useEffect(() => {
        if (numerBlock === 0 && !inView) {
            setButtonNumber(1)
        }
        else if (numerBlock === 1 && !inView) {
            setButtonNumber(2)
        }
        else if (numerBlock === 2 && !inView) {
            setButtonNumber(3)
        }
        else {
            setButtonNumber(0)
        }
    }, [yellowBlock, grinBlock, startBlock, refWrapper, numerBlock])


    const [heightrefTitle, setheightrefTitle] = useState(0)
    useEffect(() => {
        const calculateStickyHeight = () => {
            if (refTitle.current) {
                const stickyElement: any = refTitle.current;
                const { height } = stickyElement.getBoundingClientRect();
                if (height) {
                    setheightrefTitle(height)
                }
                let innerHeight = window.innerHeight;
                const parentElement = document.getElementById('functionality');
                if (parentElement) {
                    parentElement.style.height = `${innerHeight - height}px`;
                }
            }
        };

        calculateStickyHeight();
        window.addEventListener('resize', calculateStickyHeight);

        return () => {
            window.removeEventListener('resize', calculateStickyHeight);
        };
    }, [data]);

    const containerRef = useRef<any>(null)
    const blockRef = useRef<any>(null)

    return (
        <>
            {
                data ?
                    <Wrapper id='explore' ref={containerRef}>
                        <div style={{ position: 'absolute', height: '100vh', top: '0', left: '0', width: '100%' }} ref={blockRef}></div>
                        <Wrapper >
                            <StlyedWrapper>
                                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                                    <div style={{ position: 'sticky', top: 0, left: 0, marginBottom: '100vh', marginTop: '-100vh' }}>
                                        <BlanketWithButtons blockNumber={buttonNumber} containerRef={containerRef} blockRef={blockRef}></BlanketWithButtons>
                                    </div>
                                </div>
                            </StlyedWrapper>
                            <WrapperImageContainer ref={testRef}>
                                <div >
                                    <WrapperImage>
                                        <animated.img style={imageAnimated} src={'/img/imageExplore.webp'} width={1920} height={1326} alt='' />
                                    </WrapperImage>
                                </div>
                            </WrapperImageContainer>

                            <Wrapper ref={triggerRef} style={{ marginBottom: '-100vh' }}>

                                <TitleWrapper ref={stickyRef} id='title'>
                                    <WrapperTitle ref={refTitle}>
                                        {
                                            data?.title ?
                                                <Title duration={500} text={data?.title} delay={300} />
                                                : null
                                        }
                                    </WrapperTitle>
                                </TitleWrapper>

                                <Wrapper ref={refWrapperTable}>
                                    <Functionality id='functionality' style={{ marginTop: `calc(-100vh + ${heightrefTitle}px)` }}>
                                        <div style={{ width: '100%' }} ref={ref}></div>
                                        <FunctionalityWrapperTexxt>
                                            {data?.functionalityTitle ? <FunctionalityTitle>{data?.functionalityTitle}</FunctionalityTitle> : null}
                                            {data?.functionalitySubtitle ? <FunctionalitySubtitle>{data?.functionalitySubtitle}</FunctionalitySubtitle> : null}
                                        </FunctionalityWrapperTexxt>
                                    </Functionality>
                                    <WpapperInfo bgcolor={numerBlock} >

                                        <div ref={yellowRef} style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, 0%)', right: 0, height: '1px', width: '1px', pointerEvents: 'none' }}></div>
                                        <div ref={grinRef} style={{ position: 'absolute', bottom: '0%', right: 0, height: '70vh', width: '100%', pointerEvents: 'none' }}></div>
                                        <div ref={start} style={{ position: 'absolute', top: '0%', right: 0, height: '1px', width: '1px', pointerEvents: 'none' }}></div>
                                        <WrapperInfoTable>
                                            <WrapperTable ref={refTable}>
                                                <TitleTable ref={refWrapper}>5 / 15</TitleTable>
                                                <Table>
                                                    {
                                                        dataTableList.length ?
                                                            dataTableList.map((_: StepsInfo, i: number) => (
                                                                <WrapperText key={_._uid}>
                                                                    {
                                                                        _?.icon && _?.icon?.filename ?
                                                                            <Image className='icon' src={_?.icon?.filename} width={16} height={16} alt='' />
                                                                            : null
                                                                    }
                                                                    <AnimatiosPharagraphTwoT delay={50 * (i + 1)} duration={300} key={i} text={_.text}></AnimatiosPharagraphTwoT>
                                                                </WrapperText>
                                                            ))
                                                            : null
                                                    }
                                                </Table>
                                            </WrapperTable>
                                        </WrapperInfoTable>
                                    </WpapperInfo>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper >
                        <SimplicityMeetsPower data={simplicityMeetsPowerData}/>
                        <div style={{position: 'absolute', left: '0', bottom: '100vh'}} id="how"> </div>
                    </Wrapper>
                    : null
            }
        </>
    )
}