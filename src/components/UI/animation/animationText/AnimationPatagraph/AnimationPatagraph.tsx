import { useSpring, animated } from "@react-spring/web"
import { useEffect, useState } from "react"
import { useInView } from "@/hooks/useInView"

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

    const [ ref, inView ] = useInView()
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

    const effect: any = useSpring({
        to: {
            y: inView ? '0%' : '100%',
        },
        config: { duration: inView ? duration : 0 },
        delay: inView ? delay : 0
    })

    return <animated.p style={effect}>{text}</animated.p>

}

export default AnimatiosPharagraphTwo