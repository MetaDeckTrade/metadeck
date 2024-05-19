import NetworkIcons from '@/components/UI/NetworkIcons/NetworkIcons'
import { Container } from './style'
import { useEffect, useState } from 'react'
import { useSpring } from '@react-spring/web'

export default function Network(){
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
    return(
        <Container style={effect}>
            <NetworkIcons name='telegram'/>
            <NetworkIcons name='youtube'/>
            <NetworkIcons name='twitter'/>
        </Container> 
    )
}