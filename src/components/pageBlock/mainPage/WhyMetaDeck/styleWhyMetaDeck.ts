import ImageMy from "@/components/UI/ImageMy/ImageMy";
import AnimatiosWords from "@/components/UI/animation/animationText/AnimationWords/AnimationWords";
import { colors } from "@/styles";
import { orbitronBold } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import styled from "styled-components";

export const WhyMetaDeckStyle = styled.div`
    position: relative;
    width: 100%;
    padding: ${rm(100)} ${rm(60)} ${rm(160)} ${rm(60)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${rm(160)};
    z-index: 5;
    ${media.lg`
        gap: ${rm(140)};
        padding: ${rm(100)} ${rm(40)} ${rm(120)} ${rm(40)};
    `}

    ${media.md`
        gap: ${rm(80)};
        padding: ${rm(80)} ${rm(30)} ${rm(80)} ${rm(30)};
    `}

    ${media.xsm`
    padding: ${rm(30)} ${rm(10)} ${rm(80)} ${rm(10)};
    `}

    .text {
            position: relative;
            width: ${rm(613)} !important;
            overflow: hidden;
            line-height: 120% !important;
            font-size: ${rm(32)} !important;
            opacity: 0.75 !important;
            text-transform: uppercase;
            letter-spacing: 0.1em !important;

            ${media.lg`
                width: ${rm(460)} !important;
                font-size: ${rm(30)} !important;
            `}
            ${media.md`
                width: ${rm(613)} !important;
                font-size: ${rm(26)} !important;
            `}
           ${media.xsm`
                width: ${rm(314)} !important;
                font-size: ${rm(20)} !important;
            `}
    }
`

export const WhyMetaDeckImage = styled(ImageMy)`
    position: absolute;
    left: 0;
    top: ${rm(370)};
    width: ${rm(1583)};
    height: ${rm(1628)};
    pointer-events: none;
    z-index: 5;
    max-width: 100%;
`

export const ContainerText = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    ${media.lg`
        gap: ${rm(43)};
    `}
    ${media.md`
        gap: ${rm(62)};
    `}
    ${media.xsm`
        gap: ${rm(22)};
    `}
`

export const AnimatiosWordsWhyMetaDeck = styled(AnimatiosWords)`
    position: relative;
    width: 100%;
    overflow: hidden;
    ${orbitronBold()}
    >span {
        overflow: hidden;
        white-space: pre-wrap;

        >p {
            color: ${colors.white2};
            font-size: ${rm(96)};
            line-height: 120%;
            ${media.lg`
                font-size: ${rm(72)};
            `}
            ${media.md`
                font-size: ${rm(64)};
            `}
            ${media.xsm`
                font-size: ${rm(64)};
                line-height: 110%;
            `}
        }
    }
`
