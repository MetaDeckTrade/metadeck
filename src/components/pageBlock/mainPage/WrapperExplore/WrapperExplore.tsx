import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Functionality, FunctionalitySubtitle, FunctionalityTitle, FunctionalityWrapperTexxt, Table, Title, TitleTable, TitleWrapper, WpapperInfo, Wrapper, WrapperImage, WrapperImageContainer, WrapperInfoTable, WrapperTable, WrapperText, WrapperTitle } from './styleWrapperExplore';
import { useSpringTrigger } from '@/hooks/useSpringTrigger';
import SimplicityMeetsPower from '../SimplicityMeetsPower/SimplicityMeetsPower';
import { useInView } from 'react-intersection-observer';
import AnimatiosPharagraphTwo from '@/components/UI/animation/animationText/AnimationPatagraph/AnimationPatagraph';
import { animated } from "@react-spring/web";
import Image from 'next/image';
import AnimatiosPharagraphTwoT from '@/components/UI/animation/animationText/AnimationPatagraphTwo/AnimationPatagraphTwo';
const dataTable = [
    {
        text: 'Buy 1',
        duration: 300,
        delay: 50,
    },
    {
        text: 'Buy 2',
        duration: 300,
        delay: 100,
    },
    {
        text: 'Buy 3',
        duration: 300,
        delay: 150,
    },
    {
        text: 'Buy 4',
        duration: 300,
        delay: 200,
    },
    {
        text: 'Buy 5',
        duration: 300,
        delay: 250,
    }
]

const dataTable2 = [
    {
        text: 'Buy 4',
        duration: 300,
        delay: 50,
    },
    {
        text: 'Buy 25',
        duration: 300,
        delay: 100,
    },
    {
        text: 'Buy 32',
        duration: 300,
        delay: 150,
    },
    {
        text: 'Buy 44',
        duration: 300,
        delay: 200,
    },
    {
        text: 'Buy 55',
        duration: 300,
        delay: 250,
    },
]

const dataTable3 = [
    {
        text: 'Buy 44',
        duration: 300,
        delay: 50,
    },
    {
        text: 'Buy 225',
        duration: 300,
        delay: 100,
    },
    {
        text: 'Buy 34',
        duration: 300,
        delay: 150,
    },
    {
        text: 'Buy 44',
        duration: 300,
        delay: 200,
    },
    {
        text: 'Buy 55',
        duration: 300,
        delay: 250,
    },
]

export default function WrapperExplore() {
    const stickyRef = useRef(null);
    const triggerRef = useRef<HTMLDivElement>(null!)
    const refTitle = useRef<HTMLDivElement | null>(null)
    const [numerBlock, setnumerBlock] = useState(0)
    const { ref: yellowRef, inView: yellowBlock } = useInView()
    const { ref: grinRef, inView: grinBlock } = useInView()
    const { ref: start, inView: startBlock } = useInView()
    const refWrapper = useRef(null)
    const [dataTableList, setdataTableList]: any = useState([...dataTable])

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
        if (yellowBlock && numerBlock !== 1 && refWrapper.current) {
            // @ts-expect-error
            refWrapper.current.textContent = `10 / 15`
            setnumerBlock(1)
            setdataTableList([...dataTable3])

        }
        if (grinBlock && numerBlock !== 2 && refWrapper.current) {
            setnumerBlock(2)
            // @ts-expect-error
            refWrapper.current.textContent = `15 / 15`
            setdataTableList([...dataTable2])
        }
        if (startBlock && numerBlock !== 0 && refWrapper.current) {
            setnumerBlock(0)
            // @ts-expect-error
            refWrapper.current.textContent = `5 / 15`
            setdataTableList([...dataTable])
        }
    }, [yellowBlock, grinBlock, startBlock, refWrapper])


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
                const title = document.getElementById('title');
                if (parentElement) {
                    parentElement.style.height = `${innerHeight - height}px`;
                }
                // if(title){
                //     title.style.paddingBottom = `${innerHeight - height}px`
                // }
            }
        };

        calculateStickyHeight();
        window.addEventListener('resize', calculateStickyHeight);

        return () => {
            window.removeEventListener('resize', calculateStickyHeight);
        };
    }, []);

    return (
        <Wrapper >
            <div style={{ position: 'absolute', top: '0', left: '0', height: '100%' }}></div>
            <Wrapper >
                <WrapperImageContainer ref={testRef}>
                    <div >
                        <WrapperImage>
                            <animated.img style={imageAnimated} src={'/img/imageExplore.png'} width={1920} height={1326} alt='' />
                        </WrapperImage>
                    </div>
                </WrapperImageContainer>

                <Wrapper ref={triggerRef} style={{ marginBottom: '-100vh' }}>
                    <TitleWrapper ref={stickyRef} id='title'>
                        <WrapperTitle ref={refTitle}>
                            <Title duration={500} text={'Explore Your MetaDeck'} delay={300} />
                        </WrapperTitle>
                    </TitleWrapper>
                    <Wrapper>
                        <Functionality id='functionality' style={{ marginTop: `calc(-100vh + ${heightrefTitle}px)` }}>
                            <FunctionalityWrapperTexxt>
                                <FunctionalityTitle>Functionality at Your Fingertips</FunctionalityTitle>
                                <FunctionalitySubtitle>From customizable macro keys to preset trading functions, every button on MetaDeck opens up a new possibility. Here’s how MetaDeck can serve your trading needs:</FunctionalitySubtitle>
                            </FunctionalityWrapperTexxt>
                        </Functionality>
                        <WpapperInfo bgcolor={numerBlock} >

                            <div ref={yellowRef} style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, 0%)', right: 0, height: '1px', width: '1px', pointerEvents: 'none' }}></div>
                            <div ref={grinRef} style={{ position: 'absolute', bottom: '0%', right: 0, height: '1px', width: '1px', pointerEvents: 'none' }}></div>
                            <div ref={start} style={{ position: 'absolute', top: '0%', right: 0, height: '1px', width: '1px', pointerEvents: 'none' }}></div>
                            <WrapperInfoTable>
                                <WrapperTable>
                                    <TitleTable ref={refWrapper}>5 / 15</TitleTable>
                                    <Table>
                                        {
                                            numerBlock === 0 ?
                                                dataTable.map((_: any, i: number) => (
                                                    <WrapperText>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0H10L16 6V16H0V0Z" fill="#001A41" />
                                                        </svg>
                                                        <AnimatiosPharagraphTwoT delay={_.delay} duration={_.duration} key={i} text={_.text}></AnimatiosPharagraphTwoT>
                                                    </WrapperText>
                                                ))
                                                : null
                                        }
                                        {
                                            numerBlock === 1 ?
                                                dataTable2.map((_: any, i: number) => (
                                                    <WrapperText>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0H10L16 6V16H0V0Z" fill="#001A41" />
                                                        </svg>
                                                        <AnimatiosPharagraphTwoT delay={_.delay} duration={_.duration} key={i} text={_.text}></AnimatiosPharagraphTwoT>
                                                    </WrapperText>
                                                ))
                                                : null
                                        }
                                        {
                                            numerBlock === 2 ?
                                                dataTable3.map((_: any, i: number) => (
                                                    <WrapperText>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0H10L16 6V16H0V0Z" fill="#001A41" />
                                                        </svg>
                                                        <AnimatiosPharagraphTwoT delay={_.delay} duration={_.duration} key={i} text={_.text}></AnimatiosPharagraphTwoT>
                                                    </WrapperText>
                                                ))
                                                : null
                                        }
                                        {/* {
                                            dataTableList.map((_: any, i: number) => (
                                                <AnimatiosPharagraphTwo delay={300} duration={300} key={i} text={_.text}></AnimatiosPharagraphTwo>
                                            ))
                                        } */}
                                    </Table>
                                </WrapperTable>
                            </WrapperInfoTable>
                        </WpapperInfo>
                    </Wrapper>
                </Wrapper>
            </Wrapper >

            <SimplicityMeetsPower />
        </Wrapper>
    )
}