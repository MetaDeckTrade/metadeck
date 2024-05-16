import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { responsive, rm } from "@/styles/utils";
import Image from "next/image";
import styled from "styled-components";


export const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};
    padding: ${rm(80)} ${rm(60)};
    padding-top: ${rm(190)};
    background-color: ${colors.white1};
    overflow: hidden;
    ${responsive.lg`
        padding: ${rm(100)} ${rm(40)} ${rm(0)} ${rm(40)};
    `}
    ${responsive.md`
        padding: ${rm(80)} ${rm(30)} ${rm(100)} ${rm(30)};
    `}
    ${responsive.xsm`
        padding: ${rm(60)} ${rm(10)} ${rm(80)} ${rm(10)};
    `}
`

export const WrapperTitle = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: ${rm(78)};

        ${responsive.lg`
        gap: ${rm(30)};
    `}
    ${responsive.md`
        flex-direction: column;
        gap: ${rm(60)};
    `}
    ${responsive.xsm`
        gap: ${rm(30)};
    `}
`

export const Title = styled.div`
        font-size: ${rm(96)};
        line-height: 120%;
        color: ${colors.blue1} ;
        width: ${rm(832)};
        ${orbitronBold()}
        ${responsive.lg`
            font-size: ${rm(80)};
            line-height: 110%;
            width: ${rm(671)};
        `}
        ${responsive.md`
            line-height: 120%;
            width: 100%;
        `}
        ${responsive.xsm`
            font-size: ${rm(48)};
        `}
`

export const WrapperSybtitle = styled.div`
            position: relative;
            display: flex;
            flex-direction: column;
            gap: ${rm(30)};
            max-width: 100%;
            ${responsive.lg`
                gap: ${rm(34)};
                `}
                ${responsive.md`
                    gap: ${rm(40)};
                `}
                ${responsive.xsm`
                    gap: ${rm(30)};
                `}
`

export const Subtitle = styled.p`
                opacity: 0.75;
                line-height: 120%;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                font-size: ${rm(32)};
                color:${colors.blue1};
                width: ${rm(613)};
                ${responsive.xsm`
                     width: 100%;
                `}
               
`

export const SubtitleDescription = styled.p`
        font-size: ${rm(24)};
        line-height: 130%;
        letter-spacing: 0.01em;
        color: ${colors.blue1};
        opacity: 0.6;
        width: ${rm(516)};
        ${inter()}
        ${responsive.xsm`
            width: 100%;
        `}
       
`

export const Sheme = styled(Image)`
     position: relative;
    width: 100%;
    height: ${rm(697)};

    ${responsive.md`
    height: ${rm(846)};
    `}
        ${responsive.xsm`
        height: ${rm(867)};
    `}
`