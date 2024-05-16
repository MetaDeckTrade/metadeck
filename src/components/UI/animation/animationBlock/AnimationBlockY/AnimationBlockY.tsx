import { useSpring, animated } from "@react-spring/web";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer"

interface Types {
    children: any,
    duration?: number,
    delay?: number,
    props?: any
}

const style = {
    container: {
        position: 'relative',
        width: 'fit-content',
    }
}

export default function AnimationBlockY({ children, duration = 0, delay = 0, ...props }: Types) {
    const [loaded, setLoaded] = useState(false);

    const animationDelay = 1000;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, animationDelay);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <AnimationBlok delay={loaded ? delay : animationDelay + delay} duration={duration}>
            {children}
        </AnimationBlok>
    )
}

const AnimationBlok = ({ children, delay, duration }: Types) => {
    const { ref, inView } = useInView()
    const [animatedOnce, setAnimatedOnce] = useState(false);
    
    useEffect(() => {
        if(!inView) {return}
        if(inView){
            setAnimatedOnce(true)
        }
    },[inView])

    const effect: any = useSpring({
        to: {
            opacity: animatedOnce ? 1 : 0,
            y: animatedOnce ? '0%' : '40%',
        },
        config: { duration: duration },
        delay: delay,
    })
    return (
        <animated.div ref={ref} style={{...effect, ...style.container}} >
            {children}
        </animated.div>
    )
}
