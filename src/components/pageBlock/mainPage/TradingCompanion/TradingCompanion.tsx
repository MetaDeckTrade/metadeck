import Button from '@/components/UI/Button/Button'
import AnimationBlockY from '@/components/UI/animation/animationBlock/AnimationBlockY/AnimationBlockY'
import {ContainerStyle, Ellipse1, Ellipse2, Subtitle, Title, LineAnimationText, WrapperButton} from './styleTradingCompanion'
import LineAnimation from '@/components/UI/animation/animationText/AnimationLine/AnimationLine'

const TradingCompanion = () => {
    const subtitle = 'Introducing MetaDeck'
    const title = 'The Ultimate Trading Companion'
    return (
        <ContainerStyle >
            <Ellipse1 src={'/img/ellipse1.png'} width={1000} height={1101} alt=''/>
            <Ellipse2 src={'/img/ellipse2.png'}  width={1590} height={1442} alt=''/>
            <Subtitle  duration={500} text={subtitle} delay={0} />
            <Title animationDelay={1000} duration={1000} text={title} delay={500} />
            <LineAnimation tradingCompanion={true}  delay={1000}>
                The Ultimate Trading Companion The Ultimate Trading Companion The Ultimate Trading Companion The Ultimate Trading Companion
            </LineAnimation>
            <WrapperButton>
                <AnimationBlockY duration={400} delay={1500}>
                    <Button color={'yellow'}  name={'Order Now'} />
                </AnimationBlockY>
                <AnimationBlockY duration={400} delay={1900}>
                    <Button color={'white'}  name={'Discover MetaDeck'} />
                </AnimationBlockY>
            </WrapperButton>
        </ContainerStyle>
    )
}

export default TradingCompanion