import { memo, useEffect, useRef, useState } from 'react';
import { Functionality, FunctionalitySubtitle, FunctionalityTitle, FunctionalityWrapperTexxt, Title, TitleWrapper, WpapperInfo, Wrapper, WrapperImageContainer, WrapperInfoTable, WrapperTable, WrapperTitle } from './styleWrapperExplore';
import { useSpringTrigger } from '@/hooks/useSpringTrigger';
import SimplicityMeetsPower from '../SimplicityMeetsPower/SimplicityMeetsPower';
import { animated } from "@react-spring/web";
import styled from 'styled-components';
import { media } from '@/styles/utils';
import TableContain from './Table/Table';
import BlanketWithButtons from './BlanketWithButtons/BlanketWithButtons';

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
export interface TypesSimplicity {
    description: string,
    subtitle: string,
    title: string
    imgDesktop: { filename: string },
    imgLaptop: { filename: string },
    imgMobile: { filename: string },
    imgTablet: { filename: string },
}

const WrapperExplore = ({ data, simplicityMeetsPowerData }: { data: Types, simplicityMeetsPowerData: TypesSimplicity }) => {
    const triggerRef = useRef<HTMLDivElement>(null!)
    const refTitle = useRef<HTMLDivElement | null>(null)
    const highBlockRef = useRef<HTMLDivElement | null>(null);
    const testRef = useRef(null)
    const [scrollPosition, setscrollPosition] = useState(0)
    const [activeLine, setActiveLine] = useState(0)
    const [heightrefTitle, setheightrefTitle] = useState(0)
    
    const textTriggerRef = useRef<HTMLDivElement | null>(null)

    const [titleValues, titleState] = useSpringTrigger({
        trigger: textTriggerRef,
        start: 'top bottom',
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

    const [imageAnimated, stateAnim] = useSpringTrigger({
        trigger: highBlockRef,
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        from: { y: '100%' },
        to: { y: '0%' },
    })

  
    const [values, state] = useSpringTrigger({
        trigger: highBlockRef,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        from: { x: '0' },
        to: { x: '1' },
        onChange: () => {
            if (values && highBlockRef.current) {
                const y = values.x.get()

                if(+y < 0.1) {
                    setActiveLine(0)
                }
                if (+y <= 0.33 && +y > 0.1 && scrollPosition !== 1) {
                    setscrollPosition(1)
                    setActiveLine(1)
                    highBlockRef.current.style.backgroundColor = 'rgba(255, 107, 0, 1)'
                }
                if (+y <= 0.66 && +y > 0.33 && scrollPosition !== 2) {
                    // console.log('2')
                    highBlockRef.current.style.backgroundColor = 'rgba(255, 184, 0, 1) '
                    setscrollPosition(2)
                    setActiveLine(2)
                }
                if (+y > 0.66 && scrollPosition !== 3) {
                    setscrollPosition(3)
                    setActiveLine(3)
                    highBlockRef.current.style.backgroundColor = 'rgba(149, 243, 0, 1) '
                } 

            }
        }
    })

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

    useEffect(() => {
        console.log(scrollPosition)
    }, [scrollPosition])

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
                                        <BlanketWithButtons blockNumber={activeLine} containerRef={containerRef} blockRef={blockRef}></BlanketWithButtons>
                                    </div>
                                </div>
                            </StlyedWrapper>


                            <Wrapper ref={triggerRef} style={{ marginBottom: '-100vh' }}>

                                <TitleWrapper id='title' ref={textTriggerRef}>
                                    <WrapperTitle ref={refTitle}>
                                        {
                                            data?.title ?
                                                <Title duration={500} text={data?.title} delay={300} />
                                                : null
                                        }
                                    </WrapperTitle>
                                </TitleWrapper>

                                <Wrapper >
                                    <Functionality id='functionality' style={{ marginTop: `calc(-100vh + ${heightrefTitle}px)` }}>
                                        <FunctionalityWrapperTexxt>
                                            {data?.functionalityTitle ? <FunctionalityTitle>{data?.functionalityTitle}</FunctionalityTitle> : null}
                                            {data?.functionalitySubtitle ? <FunctionalitySubtitle>{data?.functionalitySubtitle}</FunctionalitySubtitle> : null}
                                        </FunctionalityWrapperTexxt>
                                    </Functionality>
                                    <WpapperInfo ref={highBlockRef} >
                                        <WrapperInfoTable>
                                            <WrapperTable >
                                                <TableContain dataTableList={data?.steps} scrollPosition={scrollPosition} />
                                            </WrapperTable>
                                            <WrapperImageContainer ref={testRef}>
                                                <animated.img style={imageAnimated} src={'/img/imageexplore.webp'} width={1920} height={1326} alt='' />
                                            </WrapperImageContainer>
                                        </WrapperInfoTable>
                                    </WpapperInfo>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper >
                        <SimplicityMeetsPower data={simplicityMeetsPowerData} />
                        <div style={{ position: 'absolute', left: '0', bottom: '100vh' }} id="how"> </div>
                    </Wrapper>
                    : null
            }
        </>
    )
}

export default memo(WrapperExplore)