import AnimatiosWords from "@/components/UI/animation/animationText/AnimationWords/AnimationWords";
import { colors } from "@/styles";
import { orbitronBold } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import Image from "next/image";
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
`

export const WhyMetaDeckImage = styled(Image)`
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
            font-size: ${rm(128)};
            line-height: 120%;
            ${media.lg`
                font-size: ${rm(126)};
            `}
            ${media.md`
                font-size: ${rm(110)};
            `}
            ${media.xsm`
                font-size: ${rm(64)};
                line-height: 110%;
            `}
        }
    }
`
