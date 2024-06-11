import NetworkIcons from '@/components/UI/NetworkIcons/NetworkIcons'
import { Container } from './style'
import { useEffect, useState } from 'react'
import { useSpring } from '@react-spring/web'

export default function Network({ data } : any) {
    console.log(data)
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
        <Container style={effect}>
            {
                data?.network && data?.network?.length ?
                    data?.network?.map((_: any, i: number) => (
                        <NetworkIcons key={i + 343} name={_.icon} href={_.href} />
                    ))
                    : null
            }

        </Container>
    )
}