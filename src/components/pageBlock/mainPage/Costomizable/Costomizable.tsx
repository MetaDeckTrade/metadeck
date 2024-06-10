import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import CompatibleWhereCounts from '../CompatibleWhereCounts/CompatibleWhereCounts'
import {StyledcontainerWrapper, ContainerStyled, WrapperContent} from './styleCostomizable'
import { MutableRefObject, useCallback, useMemo } from 'react'
import { NativeUnderpin } from '@/components/UI/NativeUnderpin/NativeUnderpin'
import WhyMetaDeck from '../WhyMetaDeck/WhyMetaDeck'

interface Types {
    number: string,
    text: string,
    title: string,
    delay: number,
    position: string,
    ref: any
}



export default function Costomizable({firstRef, secondRef, thirdRef, fourthRef, dataCms}: any,) {
    const data: any = [
        [
            {
                number: '02',
                text: 'Tailor your MetaDeck with personalized button configurations for a trading experience that fits your strategy perfectly.',
                title: 'Customizable Controls',
                delay: 300,
                position: 'end',
                positionMobile: 'end',
                ref: firstRef
            },
            {
                number: '03',
                text: 'Integrated directly into your MetaDeck, our analytics dashboard delivers real-time insights to help you make informed decisions.',
                title: 'Comprehensive Analytics',
                delay: 300,
                position: 'center',
                positionMobile: 'start',
                ref: secondRef
            },
        ],
        [
            {
                number: '04',
                text: 'Works effortlessly with all major crypto exchanges and trading bots for a seamless trading workflow.',
                title: 'Seamless Integration',
                delay: 300,
                position: 'start',
                positionMobile: 'end',
                ref: thirdRef
            },
            {
                number: '05',
                text: 'Designed with the serious trader in mind, featuring an ergonomic layout and responsive controls for all-day trading comfort.',
                title: 'Built for Traders',
                delay: 300,
                position: 'end',
                ref: fourthRef
            },
        ]
    ]

   const style = useCallback((position : string) => {
    switch (position) {
        case 'center':
            return {justifyContent: 'center'}
        case 'end':
            return {justifyContent: 'flex-end'}
        case 'start':
            return {justifyContent: 'flex-start'}
    }
   },[])
    return (
        <StyledcontainerWrapper id='compatibility'>
            {
                data.length ?
                    data.map((_: Array<Types>, i: number) => (
                        <ContainerStyled key={i}>
                            {
                                _.length ?
                                    _.map((element: Types, index: number) => (
                                        <WrapperContent ref={element.ref} key={99 + index + i} style={style(element.position)} >
                                            <InformationBlock delay={element.delay}
                                                number={element.number} title={element.title}
                                                text={element.text} />
                                        </WrapperContent>
                                    ))
                                    : null
                            }
                        </ContainerStyled>
                    ))
                    : null
            }
            <div style={{background: '#001534', height: '100%', width: '100%', position: 'absolute', top: '0', left: '0', zIndex: 1}}></div>
        </StyledcontainerWrapper>
    )
}