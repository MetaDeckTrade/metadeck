import Image from 'next/image'
import style from './CardsTeam.module.scss'
import styled from 'styled-components'
import { responsive, rm } from '@/styles/utils'
import { colors } from '@/styles'
import { inter } from '@/styles/fonts'

interface Types {
    src: string,
    name: string,
    description: string
}

export default function CardsTeam({ src, name, description }: Types) {
    const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(30)};
    padding: ${rm(34)} ${rm(32)} ${rm(70)} ${rm(32)};
    ${responsive.xsm`
    padding: ${rm(34)} ${rm(22)} ${rm(60)} ${rm(22)};
    `}
    `
    const ImageNext = styled(Image)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;`

    const WrapperImage = styled.div`
    position: relative;
    width: ${rm(96)};
    height: ${rm(96)};
    border-radius: 100%;
    overflow: hidden;

    >:nth-child(1) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `

    const StyleName = styled.p`
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.white2};
    font-size: ${rm(24)};
    opacity: 0.75;
    `

    const StyleDescription = styled.p`
    line-height: 130%;
    letter-spacing: 0.01em;
    opacity: 0.6;
    font-size: ${rm(24)};
    color: ${colors.white2};
    ${inter}
    ${responsive.lg`
    font-size: ${rm(20)};
    `}
    ${responsive.xsm`
    font-size: ${rm(18)};
    `}
    `

    const StyleIcon = styled.p`
    position: absolute;
    right: ${rm(51)};
    top: 0;
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.5;
    color: ${colors.yellow1};
    font-size: ${rm(200)};
    `

    return (
        <Container>
            <ImageNext src={'/cadsBack.svg'} width="527" height="396" alt=''/>
            <WrapperImage className={style.wrapperImg}>
                <Image src={src} alt='' width={96} height={96} />
            </WrapperImage>
            <StyleName>{name}</StyleName>
            <StyleDescription>{description}</StyleDescription>
            <StyleIcon>“</StyleIcon>
        </Container>
    )
}