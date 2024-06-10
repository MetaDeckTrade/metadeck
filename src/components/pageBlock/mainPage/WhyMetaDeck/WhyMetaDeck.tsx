import InformationBlock from '@/components/UI/InformationBlock/InformationBlock'
import { WhyMetaDeckStyle, WhyMetaDeckImage, ContainerText, AnimatiosWordsWhyMetaDeck } from './styleWhyMetaDeck'
import Text from '@/components/UI/animation/animationText/Text'

interface Info {
    index: string,
    position: string,
    sybtitle: string,
    title: string
}

interface Types {
    subtitle: string,
    title: string,
    information: Array<Info>
}

export default function WhyMetaDeck({ data }: { data: Types }) {

    return (
        <WhyMetaDeckStyle id='advantage'>
            <WhyMetaDeckImage src={'/img/ellipse3.png'} width={1583} height={1628} alt='' />
            <ContainerText>
                {data?.title ? <AnimatiosWordsWhyMetaDeck delay={0} duration={700} text={data?.title} /> : null}
                {data?.subtitle ?
                    <Text className="text" delay={300} mode='once'>
                        {data?.subtitle}
                    </Text>
                : null}
            </ContainerText>
            { data?.information && data?.information?.length ?
            <InformationBlock delay={100} number={data?.information[0]?.index} title={data?.information[0]?.title} text={data?.information[0]?.sybtitle} />
            : null}
        </WhyMetaDeckStyle>
    )
}