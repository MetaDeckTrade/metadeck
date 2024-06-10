import NetworkIcons from '@/components/UI/NetworkIcons/NetworkIcons'
import { Container, ContainerInfo, ContainerNetwork, Description, Subtitle } from './style'
import FooterBlanket from './FooterBlanket/FooterBlanket'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image'
import { media, rm } from '@/styles/utils'
import Link from 'next/link'
import { colors } from '@/styles'
const StyleLineAnimation = styled(Link)`
    position: relative;
    width: ${rm(32)};
    height: ${rm(32)};
    cursor: pointer;
    
    >svg{
        transition: ease 0.5s;
        color: ${colors.white1};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    &:hover {
        >svg{
            color: ${colors.yellow1};
        }
    }
    `
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
export interface Network {
    href: string,
    icon: string
}

interface Types {
    description: string,
    subtitle: string,
    title: string,
    network: Array<Network>
}

export default function JoinMetaDeckCommunity({ data }: { data: Types }) {

    const width = useWindowWidth()
    console.log()
    return (
        <Container id='contact'>
            {width > 576 && <FooterBlanket></FooterBlanket>}
            <ContainerInfo>
                {data?.title ? <h1>{data?.title}</h1> : null}
                {data?.subtitle ? <Subtitle>{data?.subtitle}</Subtitle> : null}
                {data?.description ? <Description>{data?.description}</Description> : null}
                <ContainerNetwork>
                    {
                        data?.network && data?.network?.length ?
                            data?.network?.map((_ : Network, i : number) => (
                                 <NetworkIcons key={i + 343} name={_.icon} href={_.href} />
                            ))
                            : null
                    }
                    {/* <NetworkIcons name='telegram' />
                    <NetworkIcons name='youtube' />
                    <NetworkIcons name='twitter' /> */}
                </ContainerNetwork>
            </ContainerInfo>
            <StyledMobileImage>
                <Image src='/img/mobileBlanketImage.png' alt='blanketImageMobile' width={500} height={400}></Image>
            </StyledMobileImage>
        </Container>
    )
}