import { colors } from "@/styles"
import { inter } from "@/styles/fonts"
import { media, responsive, rm } from "@/styles/utils"
import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
    /* background-image: url('/img/cadsBack.svg');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat; */
    position: relative;
    width: 100%; 
    display: flex; 
    flex-direction: column;
    gap: ${rm(30)};
    padding: ${rm(34)} ${rm(32)} ${rm(70)} ${rm(32)};
    >:nth-child(1){
        position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    }
    ${media.xsm`
    padding: ${rm(34)} ${rm(22)} ${rm(60)} ${rm(22)};
    `}
    `
export const ImageNext = styled(Image)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;`

export const WrapperImage = styled.div`
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

export const StyleName = styled.p`
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.white2};
    font-size: ${rm(24)};
    opacity: 0.75;
    `

export const StyleDescription = styled.p`
    line-height: 130%;
    letter-spacing: 0.01em;
    opacity: 0.6;
    font-size: ${rm(24)};
    color: ${colors.white2};
    ${inter}
    ${media.lg`
    font-size: ${rm(20)};
    `}
    ${media.xsm`
    font-size: ${rm(18)};
    `}
    `

export const StyleIcon = styled.p`
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
