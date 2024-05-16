import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Functionality, FunctionalitySubtitle, FunctionalityTitle, FunctionalityWrapperTexxt, Table, Title, TitleTable, TitleWrapper, WpapperInfo, Wrapper, WrapperInfoTable, WrapperTable, WrapperTitle } from './styleWrapperExplore';
import { useSpringTrigger } from '@/hooks/useSpringTrigger';
import SimplicityMeetsPower from '../SimplicityMeetsPower/SimplicityMeetsPower';
import { useInView } from 'react-intersection-observer';
import AnimatiosPharagraphTwo from '@/components/UI/animation/animationText/AnimationPatagraph/AnimationPatagraph';
const dataTable = [
    {
        text: 'Buy 1',
    },
    {
        text: 'Buy 2',
    },
    {
        text: 'Buy 3',
    },
    {
        text: 'Buy 4',
    },
    {
        text: 'Buy 5',
    },
]

const dataTable2 = [
    {
        text: 'Buy 4',
    },
    {
        text: 'Buy 25',
    },
    {
        text: 'Buy 32',
    },
    {
        text: 'Buy 44',
    },
    {
        text: 'Buy 55',
    },
]

const dataTable3 = [
    {
        text: 'Buy 44',
    },
    {
        text: 'Buy 225',
    },
    {
        text: 'Buy 34',
    },
    {
        text: 'Buy 44',
    },
    {
        text: 'Buy 55',
    },
]

export default function WrapperExplore() {
    const stickyRef = useRef(null);
    const triggerRef = useRef<HTMLDivElement>(null!)
    const refTitle = useRef<HTMLDivElement | null>(null)
    const [numerBlock, setnumerBlock] = useState(0)
    const { ref: yellowRef, inView: yellowBlock } = useInView()
    const { ref: grinRef, inView: grinBlock } = useInView()
    const { ref: start, inView:startBlock } = useInView()
    const refWrapper = useRef(null)
    const [dataTableList, setdataTableList] : any = useState([])

    const { values: titleValues } = useSpringTrigger({
        trigger: triggerRef,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        from: { x: '0' },
        to: { x: '1' },
        onChange: () => {
            // console.log(state.value.progress)
            // if (state.value.progress > 0.2 && numerBlock !== 1 && state.value.progress < 0.4) {
            //     setnumerBlock(1)
            // } else if (state.value.progress >= 0.4 && numerBlock !== 2) {
            //     setnumerBlock(2)
            // } else if (state.value.progress <= 0.2 && numerBlock !== 0) {
            //     setnumerBlock(0)
            // }
            
              if (refTitle.current && titleValues) {
                const width = refTitle.current.getBoundingClientRect().width
                // const translateX =  window.innerWidth / width   * 100 * titleValues.x.get()
            // @ts-expect-error
                const translateX= (width -  window.innerWidth) * titleValues.x.get()

                  refTitle.current.style.transform = `translate(${-translateX}px, 0px)`
              }
        }
    })
    useEffect(() => { 
        if(yellowBlock && numerBlock !== 1 && refWrapper.current){
            // @ts-expect-error
            refWrapper.current.textContent = `10 / 15`
            setnumerBlock(1)
            setdataTableList(dataTable3)

        }
        if(grinBlock && numerBlock !== 2 && refWrapper.current){
            setnumerBlock(2)
            // @ts-expect-error
            refWrapper.current.textContent = `15 / 15`
            setdataTableList(dataTable2)

        }
        if(startBlock && numerBlock !== 0 && refWrapper.current) {
            setnumerBlock(0)
            // @ts-expect-error
            refWrapper.current.textContent = `5 / 15`
            setdataTableList(dataTable)
        }
    }, [yellowBlock, grinBlock, startBlock, refWrapper])

    

    useEffect(() => {
        const calculateStickyHeight = () => {
            if (stickyRef.current) {
                const stickyElement: any = stickyRef.current;
                const { height } = stickyElement.getBoundingClientRect();
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
            <div  style={{ position: 'absolute', top: '0', left: '0', height: '100%' }}></div>
            <Wrapper ref={triggerRef}>
                <TitleWrapper ref={stickyRef} id='title'>
                    <WrapperTitle ref={refTitle}>
                        <Title duration={500} text={'Explore Your MetaDeck'} delay={300} />
                    </WrapperTitle>
                </TitleWrapper>
                <Wrapper>
                    <Functionality id='functionality'>
                        <FunctionalityWrapperTexxt>
                            <FunctionalityTitle>Functionality at Your Fingertips</FunctionalityTitle>
                            <FunctionalitySubtitle>From customizable macro keys to preset trading functions, every button on MetaDeck opens up a new possibility. Here’s how MetaDeck can serve your trading needs:</FunctionalitySubtitle>
                        </FunctionalityWrapperTexxt>
                    </Functionality>
                    <WpapperInfo bgColor={numerBlock} >
                        
                        <div ref={yellowRef} style={{position: 'absolute', top: '50%', transform: 'translate(-50%, 0%)', right: 0, height: '1px', width: '1px', pointerEvents: 'none'}}></div>
                        <div ref={grinRef} style={{position: 'absolute', bottom: '0%', right: 0, height: '1px', width: '1px', pointerEvents: 'none'}}></div>
                        <div ref={start} style={{position: 'absolute', top: '0%', right: 0, height: '1px', width: '1px', pointerEvents: 'none'}}></div>
                        <WrapperInfoTable>
                            <WrapperTable>
                                <TitleTable ref={refWrapper}>5 / 15</TitleTable>
                                <Table>
                                    {
                                        dataTableList.map((_: any, i: number) => (
                                            <AnimatiosPharagraphTwo key={i} text={_.text }></AnimatiosPharagraphTwo>
                                        ))
                                    }
                                </Table>
                            </WrapperTable>
                        </WrapperInfoTable>
                    </WpapperInfo>
                </Wrapper>
            </Wrapper>
            <SimplicityMeetsPower />
        </Wrapper>
    )
}