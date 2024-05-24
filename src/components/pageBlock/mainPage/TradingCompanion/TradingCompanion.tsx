import Button from '@/components/UI/Button/Button'
import AnimationBlockY from '@/components/UI/animation/animationBlock/AnimationBlockY/AnimationBlockY'
import {ContainerStyle, Ellipse1, Ellipse2, Subtitle, Title, WrapperButton} from './styleTradingCompanion'
import Text from '@/components/UI/animation/animationText/Text'

const TradingCompanion = () => {
    const subtitle = 'Introducing MetaDeck'
    const title = 'The Ultimate Trading Companion'
    return (
        <ContainerStyle id='about'>
            <Ellipse1 src={'/img/ellipse1.png'} width={1000} height={1101} alt=''/>
            <Ellipse2 src={'/img/ellipse2.png'}  width={1590} height={1442} alt=''/>
            <Subtitle  duration={600} text={subtitle} delay={0} />
            <Title animationDelay={0} duration={800} text={title} delay={400} />
            <Text className="text" delay={300} mode='once'>
                Welcome to the future of crypto trading. MetaDeck redefines your trading desk with unparalleled control and precision. Effortlessly execute trades, set limits, and analyze your performance with a single touch
            </Text>
            {/* <LineAnimation tradingCompanion={true}  delay={300}>
                Welcome to the future of crypto trading. MetaDeck redefines your trading desk with unparalleled control and precision. Effortlessly execute trades, set limits, and analyze your performance with a single touch
            </LineAnimation> */}
            <WrapperButton>
                <AnimationBlockY duration={400} delay={300}>
                    <Button color={'yellow'}  name={'Order Now'} />
                </AnimationBlockY>
                <AnimationBlockY duration={300} delay={300}>
                    <Button color={'white'}  name={'Discover MetaDeck'} />
                </AnimationBlockY>
            </WrapperButton>
        </ContainerStyle>
    )
}

export default TradingCompanion