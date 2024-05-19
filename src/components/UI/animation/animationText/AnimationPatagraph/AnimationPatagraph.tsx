import { useSpring, animated } from "@react-spring/web"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Types {
    duration: number,
    text: string,
    delay: number,
    props? : any
}

interface TypesText {
    inView: boolean,
    text: string,
    duration: number,
    delay: number,
}

const AnimatiosPharagraphTwo = ({animationDelay = 0, duration = 0, text, delay = 0,  ...props }: Types | any) => {

    const { ref, inView } = useInView()
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, animationDelay);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div ref={ref} {...props}>
            <Text inView={inView} text={text} duration={duration} delay={loaded ? delay : animationDelay + delay}/>
        </div>
    )
}

const Text = ({ inView = false, text, duration, delay }: TypesText) => {
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if(!inView) {return}
        if(inView){
            setAnimatedOnce(true)
        }
    },[inView])

    const effect: any = useSpring({
        to: {
            y: animatedOnce ? '0%' : '100%',
        },
        config: { duration: duration },
        delay: delay
    })

    return <animated.p style={effect}>{text}</animated.p>

}

export default AnimatiosPharagraphTwo