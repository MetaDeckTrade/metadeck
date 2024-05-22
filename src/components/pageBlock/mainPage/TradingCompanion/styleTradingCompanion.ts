import LineAnimation from "@/components/UI/animation/animationText/AnimationLine/AnimationLine";
import AnimatiosPharagraphTwo from "@/components/UI/animation/animationText/AnimationPatagraph/AnimationPatagraph";
import AnimatiosWords from "@/components/UI/animation/animationText/AnimationWords/AnimationWords";
import { colors, fonts } from "@/styles";
import { orbitronBold } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import Image from "next/image";
import styled from "styled-components";


export const ContainerStyle = styled.div`
    position: relative;
    width: 100%;
    padding: calc(${rm(90)} + ${rm(40)}) ${rm(60)} ${rm(200)} ${rm(60)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${rm(20)};
    ${media.lg`
    padding: calc(${rm(90)} + ${rm(40)}) ${rm(40)} ${rm(270)} ${rm(40)};
    `}

    ${media.md`
    padding: calc(${rm(90)} + ${rm(60)}) ${rm(30)} ${rm(644)} ${rm(30)};
    `}

    ${media.xsm`
    padding: calc(${rm(90)} + ${rm(40)}) ${rm(10)} ${rm(600)} ${rm(10)};
    `}

`
export const Ellipse1 = styled(Image)`
position: absolute;
    left: 0;
    top: ${rm(50)};
    width: ${rm(1000)};
    height: ${rm(1101)};
    pointer-events: none;
    max-width: 100%;
`

export const Ellipse2 = styled(Image)`
    position: absolute;
    right: 0;
    top: 0;
    width: ${rm(1590)};
    height: ${rm(1442)};
    pointer-events: none;
    max-width: 100%;
    ${media.md`
        height: ${rm(870)};
        width: ${rm(900)};
    `}
    ${media.xsm`
        height: ${rm(1030)};
        width: ${rm(533)};
    `}
`

export const Subtitle = styled(AnimatiosPharagraphTwo)`
    position: relative;
    width: 100%;
    overflow: hidden;

    >p {
        opacity: 0.75;
        color: ${colors.white2};
        letter-spacing: 0.1em;
        font-size: ${rm(32)} ;
        line-height: 120%;
        text-transform: uppercase;
        ${media.xsm`
            font-size: ${rm(30)};
        `}
        ${media.xsm`
            font-size: ${rm(20)};
        `}
    }
`

export const Title = styled(AnimatiosWords)`
    position: relative;
    width: 100%;
    overflow: hidden;
    ${orbitronBold()}

    >span {
        overflow: hidden;
        white-space: pre-wrap;
        >p {
            color: ${colors.white2};
            font-size: ${rm(160)};
            line-height: 120%;
            ${media.lg`
            font-size: ${rm(122)};
            `}
            ${media.md`
                font-size: ${rm(90)};
            `}
            ${media.xsm`
                font-size: ${rm(48)};
            `}
        }
    }
`

export const LineAnimationText = styled(LineAnimation)`
    position: relative;
    width: ${rm(585)} !important;
    overflow: hidden;
    ${fonts.inter}
    ${media.lg`
        width: ${rm(445)} !important;
    `}
    ${media.md`
         width: ${rm(474)} !important;
         margin-top: ${rm(20)};
    `}
    ${media.xsm`
        width: 100% !important;
        margin-top: ${rm(0)};
    `}
`

export const WrapperButton = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${rm(20)};
    margin-top: ${rm(40)};
    ${media.lg`
         margin-top: ${rm(60)};
    `}
    ${media.xsm`
       flex-direction: column;
       margin-top: ${rm(10)};
       align-items: flex-start;

    `}
`

