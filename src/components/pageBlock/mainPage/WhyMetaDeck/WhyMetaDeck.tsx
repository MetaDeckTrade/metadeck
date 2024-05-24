import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import {WhyMetaDeckStyle, WhyMetaDeckImage, ContainerText, AnimatiosWordsWhyMetaDeck} from './styleWhyMetaDeck'
import Text from '@/components/UI/animation/animationText/Text'

export default function WhyMetaDeck() {

    return (
        <WhyMetaDeckStyle id='advantage'>
            <WhyMetaDeckImage src={'/img/ellipse3.png'} width={1583} height={1628} alt=''/>
            <ContainerText>
                <AnimatiosWordsWhyMetaDeck delay={0} duration={700} text={'Why MetaDeck'} />
                <Text className="text" delay={300} mode='once'>
                    Unlock the Power of Efficiency and Precision
                </Text>
            </ContainerText>
            <InformationBlock delay={100} number={'01'} title={'Instant Execution:'} text={'React in real-time, execute trades instantly, and never miss an opportunity again.'}/>
        </WhyMetaDeckStyle>
    )
}