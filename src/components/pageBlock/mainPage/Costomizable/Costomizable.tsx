import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import CompatibleWhereCounts from '../CompatibleWhereCounts/CompatibleWhereCounts'
import {StyledcontainerWrapper, ContainerStyled, WrapperContent} from './styleCostomizable'
import { useCallback, useMemo } from 'react'
import { NativeUnderpin } from '@/components/UI/NativeUnderpin/NativeUnderpin'
import WhyMetaDeck from '../WhyMetaDeck/WhyMetaDeck'

interface Types {
    number: string,
    text: string,
    title: string,
    delay: number,
    position: string
}
const data = [
    [
        {
            number: '02',
            text: 'Tailor your MetaDeck with personalized button configurations for a trading experience that fits your strategy perfectly.',
            title: 'Customizable Controls',
            delay: 300,
            position: 'end',
            positionMobile: 'end'
        },
        {
            number: '03',
            text: 'Integrated directly into your MetaDeck, our analytics dashboard delivers real-time insights to help you make informed decisions.',
            title: 'Comprehensive Analytics',
            delay: 300,
            position: 'center',
            positionMobile: 'start'

        },
    ],
    [
        {
            number: '04',
            text: 'Works effortlessly with all major crypto exchanges and trading bots for a seamless trading workflow.',
            title: 'Seamless Integration',
            delay: 300,
            position: 'start',
            positionMobile: 'end'

        },
        {
            number: '05',
            text: 'Designed with the serious trader in mind, featuring an ergonomic layout and responsive controls for all-day trading comfort.',
            title: 'Built for Traders',
            delay: 300,
            position: 'end'
        },
    ]
]
export default function Costomizable() {
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
            <WhyMetaDeck />
            
            {
                data.length ?
                    data.map((_: Array<Types>, i: number) => (
                        <ContainerStyled key={i}>
                            {
                                _.length ?
                                    _.map((element: Types, index: number) => (
                                        <WrapperContent key={99 + index + i} style={style(element.position)} >
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

            <CompatibleWhereCounts />
        </StyledcontainerWrapper>
    )
}