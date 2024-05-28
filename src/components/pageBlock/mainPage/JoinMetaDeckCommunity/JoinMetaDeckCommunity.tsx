import NetworkIcons from '@/components/UI/NetworkIcons/NetworkIcons'
import { Container, ContainerInfo, ContainerNetwork, Description, Subtitle } from './style'
import FooterBlanket from './FooterBlanket/FooterBlanket'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image'
import { media, rm } from '@/styles/utils'

const StyledMobileImage = styled.div`
    display: none;
    width: 100%;
    height: ${rm(330)};
    position: relative;
    overflow: hidden;
    margin-top: ${rm(60)};

    ${media.xsm`
        display: flex;
    `}

    img{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export default function JoinMetaDeckCommunity() {

    const width = useWindowWidth()

    return (
        <Container id='contact'>
            {width > 576 && <FooterBlanket></FooterBlanket>}
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
            <StyledMobileImage>
                <Image src='/img/mobileBlanketImage.png' alt='blanketImageMobile' width={500} height={400}></Image>
            </StyledMobileImage>
        </Container>
    )
}