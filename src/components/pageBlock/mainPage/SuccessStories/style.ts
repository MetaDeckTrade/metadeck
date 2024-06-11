import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(120)};
    padding: ${rm(180)} ${rm(60)} ${rm(90)} ${rm(60)};
    background-color: ${colors.blue2};
    
    /* margin-top: -100vh;
    margin-top: -100lvh;
    margin-top: calc(var(--vh, 1lvh) * 50); */

    >:nth-child(1){
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: ${rm(280)};
       
        >h1{
            color: ${colors.white2} ;
            font-size: ${rm(96)};
            line-height: 120%;
            width: ${rm(628)};
            ${orbitronBold()}

            ${media.lg`
                line-height: 110%;
            `}
            ${media.md`
                width: 100%;
                line-height: 120%;
                font-size: ${rm(80)};
            `}
            ${media.xsm`
                font-size: ${rm(48)};
            `}
        }

        ${media.lg`
            gap: ${rm(60)};
        `}
        ${media.md`
            flex-direction: column;
        `}
        ${media.xsm`
            gap: ${rm(20)};
        `}
    }

    >:nth-child(2){
        position: relative;
        width: 100%;
        display: grid;
        grid-template: 1fr/ 1fr 1fr 1fr;
        gap: ${rm(80)};

        ${media.lg`
            gap: ${rm(20)};
        `}
        ${media.md`
            grid-template: 1fr/ 1fr 1fr;
            column-gap: ${rm(16)};
            row-gap: ${rm(32)};
        `}
        ${media.xsm`
            grid-template: 1fr/ 1fr;
            gap: ${rm(20)};
        `}
    }

    ${media.lg`
        padding: ${rm(100)} ${rm(40)} ${rm(70)} ${rm(40)};
    `}
    ${media.md`
        padding: ${rm(80)} ${rm(30)} ${rm(63)} ${rm(30)};
        gap: ${rm(66)};
    `}
    ${media.lg`
        padding: ${rm(80)} ${rm(10)} ${rm(40)} ${rm(10)};
        gap: ${rm(66)};
    `}
`

export const WrapperSubtitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${rm(30)};

    .dataSubtitle{
        color: ${colors.white2};
        opacity: 0.75;
        line-height: 120%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: ${rm(32)};
        width: ${rm(613)};
        ${media.lg`
            font-size: ${rm(30)} ;
            width: ${rm(436)};
        `}
        ${media.md`
            width: ${rm(424)};
        `}
        ${media.xsm`
             width: ${rm(297)};
             font-size: ${rm(20)};
        `}
    }
    
    .dataDescription{
        line-height: 130%;
        letter-spacing: 0.01em;
        opacity: 0.6;
        font-size: ${rm(24)} ;
        color: ${colors.white2};
        width: ${rm(424)};
        ${inter()}
        ${media.lg`
            font-size: ${rm(20)} ;
            width: ${rm(361)};
        `}
        ${media.md`
            width: ${rm(496)};
        `}
        ${media.xsm`
             width: ${rm(324)};
             font-size: ${rm(18)};
        `}
    
    }

    ${media.lg`
    gap: ${rm(34)};
    `}
    ${media.md`
    gap: ${rm(40)};
    `}
`