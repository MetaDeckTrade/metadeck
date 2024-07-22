import ImageMy from "@/components/UI/ImageMy/ImageMy";
import { colors } from "@/styles";
import { inter, orbitron, orbitronBold } from "@/styles/fonts";
import { heightLvh, marginLvh, media, rm } from "@/styles/utils";

import styled from "styled-components";


export const Stiky = styled.div`
    position: relative;
    background-color: ${colors.white1} ;
`
export const StikyNew = styled.div`
    position: sticky;
    top: 0; left: 0;
    width: 100%;
    background-color: ${colors.white1} ;
`

export const CompatibleWhereCountsStyleNew = styled.div`
    overflow: hidden; 
    will-change: transform; 
    position: relative;
    background-color: ${colors.white1};
    width: 100%;
    padding: ${rm(140)} ${rm(0)} ${rm(214)} ${rm(0)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;

    ${media.lg`
        padding: ${rm(160)} ${rm(0)} ${rm(214)} ${rm(0)};
    `}

    ${media.md`
        padding: ${rm(100)} ${rm(0)} ${rm(175)} ${rm(0)};
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(0)} ${rm(32)} ${rm(0)};
    `}

    .WrapperInfo {
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: ${rm(147)};
        padding: ${rm(0)} ${rm(60)};

        ${media.lg`
            gap: ${rm(40)};
            padding: ${rm(0)} ${rm(40)};
        `}

        ${media.md`
            flex-direction: column;
            padding: ${rm(0)} ${rm(30)} ${rm(30)} ${rm(30)};
            gap: ${rm(32)};
        `}
    }

    .title{
        line-height: 120%;
        width: ${rm(915)};
        color: ${colors.blue1};
        font-size: ${rm(96)};
        ${orbitronBold()};

        ${media.lg`
            font-size: ${rm(85)};
            line-height: 110%;
            width: 100%;
        `}

        ${media.md`
            line-height: 120%;
        `}

        ${media.xsm`
            width: 100%;
            font-size:  ${rm(40)};
            margin: 0;
        `}
    }
    
`

export const Text = styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: ${rm(40)};
    background-color: #d8dbdf;
    gap: ${rm(40)};
    flex-shrink: 0;

    ${media.xsm`
        gap: ${rm(20)};
        padding: ${rm(15)};
    `}

    &::before {
        content: '';
        width: ${rm(40)};
        height: ${rm(40)};
        position: absolute;
        right: ${rm(-20)};
        top: ${rm(-20)};
        transform: rotate(45deg);
        background-color: #fff;
    }

    > :nth-child(1){
        line-height: 120%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #001a41;
        font-size: ${rm(32)};
        ${orbitron()}
        width: ${rm(415)};

        ${media.lg`
            width: ${rm(370)};
        `}

        ${media.xsm`
            width: 100%;
            font-size: ${rm(24)};
        `}
    }

    > :nth-child(2){
        line-height: 130%;
        color: #001a41;
        font-size: ${rm(24)};
        opacity: 0.8;
        ${inter()}
        width: ${rm(500)};

        ${media.lg`
            width: ${rm(400)};
        `}
        ${media.xsm`
            width: 100%;
            font-size: ${rm(16)};
        `}
    }
`

export const SwiperSlideImage = styled.img`
    position: relative;
    width: 100%;
    height: ${rm(256)};
    ${media.lg`
        height: ${rm(255)};
        `}
         ${media.md`
        height: ${rm(224)};
        `}
        ${media.xsm`
        height: ${rm(125)};
        width: ${rm(185)};
        `}
 
`