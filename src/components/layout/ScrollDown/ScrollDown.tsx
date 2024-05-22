import { useCallback, useContext, useState, createContext, useEffect } from 'react'
import { Container } from './style'
import { useSpring } from '@react-spring/web'
// @ts-ignore
const ButtonScrollContext = createContext()

export default function ScrollDown({children} : any) {
    const [isBottom, setIsBottom] = useState(false)
    const handleTopClick = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const handleNextClick = useCallback(() => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight / 1.5,
            behavior: "smooth",
        });
    }, [])
    const [booted, setbooted] = useState(false)
    useEffect(() => {
        setbooted(true)
    }, [])
    const effect: any = useSpring({
        to: {
            y: booted ? '0rem' : '5rem',
        },
        config: { duration: 1000 },
        delay: 700
    })
    return (
        <ButtonScrollContext.Provider value={{ isBottom, setIsBottom }}>
        <Container style={effect} onClick={ () => {isBottom ? handleTopClick() : handleNextClick()}}>
            <p >Scroll Down</p>
            <svg style={ isBottom ? {transform: 'rotate(180deg)' } : {}} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="white" />
            </svg>
        </Container>
        {children}
        </ButtonScrollContext.Provider>

    )
}
export const useButtonScroll = () => {
    const context = useContext(ButtonScrollContext)
    return context
}
