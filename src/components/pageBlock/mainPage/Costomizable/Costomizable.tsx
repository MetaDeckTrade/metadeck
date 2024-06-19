import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import CompatibleWhereCounts from '../CompatibleWhereCounts/CompatibleWhereCounts'
import { StyledcontainerWrapper, ContainerStyled, WrapperContent } from './styleCostomizable'
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



export default function Costomizable({ firstRef, secondRef, thirdRef, fourthRef, data }: any,) {
    const dataCms = useMemo(() => {
        if(!data || !data?.information?.length) {return}
        const dataNew = data?.information?.filter((_ : any, i : number) => i !== 0 )
        return dataNew
    },[data])
   
    const refArray = [
        firstRef,
        secondRef,
        thirdRef,
        fourthRef
    ]

    const style = useCallback((position: string) => {
        // switch (position) {
        //     case 'center':
        //         return { justifyContent: 'center' }
        //     case 'end':
        //         return { justifyContent: 'flex-end' }
        //     case 'start':
                return { justifyContent: 'flex-start' }
        // }
    }, [])
    return (
        <StyledcontainerWrapper id='compatibility'>
            {
                dataCms && dataCms.length ?
                dataCms.map((_: any, i: number) => (
                        <ContainerStyled key={i}>
                            <WrapperContent ref={refArray?.[i]} key={99 + i} style={style(_.position)} >
                                <InformationBlock delay={300}
                                    number={_.index} title={_.title}
                                    text={_.sybtitle} />
                            </WrapperContent>
                        </ContainerStyled>
                    ))
                    : null
            }
            <div style={{ background: '#001534', height: '100%', width: '100%', position: 'absolute', top: '0', left: '0', zIndex: 1 }}></div>
        </StyledcontainerWrapper>
    )
}