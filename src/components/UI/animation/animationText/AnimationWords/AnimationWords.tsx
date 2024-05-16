
'use client'

import { useSpring, animated } from "@react-spring/web"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Types {
    animationDelay? : number,
    duration: number,
    text: string,
    delay: number,
    props?: any
}

interface TypesText {
    inView: boolean,
    text: string,
    duration: number,
    delay: number,
    i? : boolean
}

const AnimatiosWords = ({ animationDelay = 0, duration = 0, text, delay = 0, ...props }: Types | any) => {

    const { ref, inView } = useInView()

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
                                        <Text inView={inView} i={i+1 === textWords.length} text={_} duration={duration} delay={loaded ? i * delay : animationDelay + (i * delay)} />
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

const Text = ({ inView = false, text, duration, delay, i=false }: TypesText) => {

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

    return <animated.p style={effect}>{text + ( i ? '' : ' ')}</animated.p>

}

export default AnimatiosWords