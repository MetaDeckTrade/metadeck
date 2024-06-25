

import { useInView } from "@/hooks/useInView"
import { useSpring, animated } from "@react-spring/web"
import { useEffect, useMemo, useState } from "react"
// import { useInView } from "@/hooks/useInView"

interface Types {
    animationDelay? : number,
    duration: number,
    text: string,
    delay: number,
    props?: any,
    singleAnimation?: boolean
}

interface TypesText {
    inView: boolean,
    text: string,
    duration: number,
    delay: number,
    i? : boolean,
    singleAnimation?: boolean

}

const AnimatiosWords = ({ animationDelay = 0, duration = 0, text, delay = 0, singleAnimation  = false, ...props }: Types | any) => {

    const  [ ref, inView ] = useInView()

    const textWords = useMemo(() => {
        if (text.length) {
            const textWords = text.split(' ')
            if (textWords.length) {
                return textWords
            }
        }
    }, [text])

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, animationDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {
                text ?
                    <div ref={ref} {...props}>
                        {
                            textWords?.length ?
                                textWords.map((_: string, i: number) => (
                                    <span key={i}>
                                        <Text singleAnimation={singleAnimation} inView={inView} i={i+1 === textWords.length} text={_} duration={duration} delay={loaded ? i * delay : animationDelay + (i * delay)} />
                                    </span>
                                ))
                                : null
                        }
                    </div>
                    : null
            }
        </>
    )
}

const Text = ({ inView = false, text, duration, delay, i=false, singleAnimation }: TypesText) => {

    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        if(!inView) {return}
        if(inView){
            setAnimatedOnce(true)
        }
    },[inView])

    const effect: any = useSpring({
        to: {
            y: inView ? '0%' : '100%',
        },
        config: { duration: inView ? duration : 0 },
        delay: inView ? delay : 0
    })
    const effect2: any = useSpring({
        to: {
            y: animatedOnce ? '0%' : '100%',
        },
        config: { duration: animatedOnce ? duration : 0 },
        delay: animatedOnce ? delay : 0
    })

    return <animated.p style={ singleAnimation ? effect2 : effect}>{text + ( i ? '' : ' ')}</animated.p>

}

export default AnimatiosWords