import { colors } from "@/styles";
import { orbitronBold } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import { animated } from "@react-spring/web";
import Link from "next/link";
import styled, { css } from "styled-components";


export const StyleHeaderContainer = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: ${rm(90)};
    padding: ${rm(17)} ${rm(60)};
    background-color: ${colors.blue1};
    display: flex;
    align-items: center;
    gap: ${rm(20)};
    justify-content: space-between;
    z-index: 120;
   
    ${media.lg`
        padding: ${rm(17)} ${rm(40)};
    `} 
     ${media.md`
        padding: ${rm(17)} ${rm(40)};
    `}
    ${media.xsm`
        height: ${rm(60)};
        padding: ${rm(12)} ${rm(10)};
    `}
`

export const LogoWrapper = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rm(8.47)};
    cursor: pointer;

    >img {
        position: relative;
        width: ${rm(72.24)};
        height: ${rm(36)};
    }

    >p {
        font-size: ${rm(32)};
        color: ${colors.white2};
        line-height: 100%;
        ${orbitronBold()}
        ${media.xsm`
            display: none;
        `}
    }
`

export const NavigationsContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rm(60)};
    ${media.md`
        display: none;
    `}
`

export const NavigationsContainerMobile = styled.div`
    position: relative;
    align-items: center;
    display: none;
    gap: ${rm(60)};
    ${media.md`
        display: flex;
    `}
`
interface SvgStyleProps extends React.SVGAttributes<SVGSVGElement> {
    burger: boolean;
  }
  
export const SvgStyle = styled.svg<SvgStyleProps>`
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    user-select: none;
    height: ${rm(60)};
    width: ${rm(60)};
    flex-shrink: 0;
    display: none;
    pointer-events: all !important;
   
    ${media.md`
        display: block;
    `}
    ${media.xsm`
        height: ${rm(40)};
        width: ${rm(40)};
    `}
    >:nth-child(1){
        stroke-dasharray: 40 121;
    }
    >:nth-child(3){
        stroke-dasharray: 40 121;
    }
   
    >path {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: ${colors.white1};
        stroke-width: 5.5;
        stroke-linecap: round;
    }
        ${({ burger } : any) => burger &&
            css`
                transform: rotate(45deg) !important;
                >:nth-child(1){
                    stroke-dashoffset: -68px !important;
                        }
                >:nth-child(3){
                    stroke-dashoffset: -68px !important;
                }`
        }
`