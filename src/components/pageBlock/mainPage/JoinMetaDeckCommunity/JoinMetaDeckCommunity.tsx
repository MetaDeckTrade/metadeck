import NetworkIcons from '@/components/UI/NetworkIcons/NetworkIcons'
import { Container, ContainerInfo, ContainerNetwork, Description, Subtitle } from './style'

export default function JoinMetaDeckCommunity() {

    return (
        <Container id='contact'>
            <ContainerInfo>
                <h1>Join the MetaDeck Community</h1>
                <Subtitle>Connect, Learn, and Grow</Subtitle>
                <Description>Get the most out of your MetaDeck by joining our community of dedicated traders. Share tips, strategies, and get exclusive community-only benefits.</Description>
                <ContainerNetwork>
                    <NetworkIcons name='telegram' />
                    <NetworkIcons name='youtube' />
                    <NetworkIcons name='twitter' />
                </ContainerNetwork>
            </ContainerInfo>
        </Container>
    )
}