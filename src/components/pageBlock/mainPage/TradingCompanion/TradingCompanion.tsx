import Button from '@/components/UI/Button/Button'
import AnimationBlockY from '@/components/UI/animation/animationBlock/AnimationBlockY/AnimationBlockY'
import { ContainerStyle, Ellipse1, Ellipse2, Subtitle, Title, WrapperButton } from './styleTradingCompanion'
import Text from '@/components/UI/animation/animationText/Text'

interface Navigation {
    anchor: string,
    href: string,
    name: string,
    style?: string
}

interface Types {
    description: any,
    subtitle: string,
    title: string,
    button: Array<Navigation>
}

const TradingCompanion = ({ data }: { data: Types | null }) => {

    return (
        <ContainerStyle id='about'>
            <Ellipse1 src={'/img/ellipse1.webp'} width={1000} height={1101} alt='' />
            <Ellipse2 src={'/img/ellipse2.webp'} width={1590} height={1442} alt='' />
            {data?.subtitle ? <Subtitle duration={600} text={data?.subtitle} delay={0} /> : null}
            {data?.title ? <Title animationDelay={0} duration={800} text={data?.title} delay={400} /> : null}
            {
                data?.description ?
                    <Text  className="text" delay={300} mode='once'>
                        {data?.description}
                    </Text>
                    : null
            }

            <WrapperButton>
                {
                    data?.button && data?.button.length ?
                        data?.button?.map((_: Navigation, i: number) => (
                            <AnimationBlockY duration={(i + 3) * 100} key={i + 3434} delay={1300}>
                                <Button color={_.style} key={i + 343} name={_.name} href={_.href} anchor={_.anchor} />
                            </AnimationBlockY>
                        ))
                        : null
                }
            </WrapperButton>
        </ContainerStyle>
    )
}

export default TradingCompanion