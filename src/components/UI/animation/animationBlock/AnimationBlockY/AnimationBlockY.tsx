import { useSpring, animated } from "@react-spring/web";
import { memo } from "react";
import { useInView } from "@/hooks/useInView"

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

const AnimationBlockY = ({ children, duration = 0, delay = 0, ...props }: Types) => {

    return (
        <AnimationBlok delay={delay} duration={duration} {...props}>
            {children}
        </AnimationBlok>
    )
}

const AnimationBlok = ({ children, delay, duration, ...props }: Types) => {
    const [ ref, inView ] = useInView()

    const effect: any = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            y: inView ? '0%' : '40%',
            willChange: 'transform',
        },
        config: { duration: inView ?  duration : 0 },
        delay: inView ? delay : 0,
    })

    return (
        <animated.div {...props} ref={ref} style={{...effect, ...style.container}} >
            {children}
        </animated.div>
    )
}


export default memo(AnimationBlockY)