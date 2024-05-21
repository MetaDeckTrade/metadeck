import LineAnimation from '@/components/UI/animation/animationText/AnimationLine/AnimationLine'
import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import {WhyMetaDeckStyle, WhyMetaDeckImage, ContainerText, AnimatiosWordsWhyMetaDeck} from './styleWhyMetaDeck'
import CompatibleWhereCounts from '../CompatibleWhereCounts/CompatibleWhereCounts'

export default function WhyMetaDeck() {

    return (
        <WhyMetaDeckStyle id='advantage'>
            <WhyMetaDeckImage src={'/img/ellipse3.png'} width={1583} height={1628} alt=''/>
            <ContainerText>
                <AnimatiosWordsWhyMetaDeck delay={0} duration={700} text={'Why MetaDeck'} />
                <LineAnimation whyMetaDeck={true}>
                    Unlock the Power of Efficiency and Precision
                </LineAnimation>
            </ContainerText>
            <InformationBlock delay={300} number={'01'} title={'Instant Execution:'} text={'React in real-time, execute trades instantly, and never miss an opportunity again.'}/>
        </WhyMetaDeckStyle>
    )
}