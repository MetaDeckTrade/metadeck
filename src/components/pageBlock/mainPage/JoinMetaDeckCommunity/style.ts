import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: ${rm(90)} ${rm(60)} ${rm(100)} ${rm(60)};
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;

    ${media.lg`
       padding: ${rm(70)} ${rm(40)} ${rm(120)} ${rm(40)};
       padding-left: 0;
    `}

    ${media.md`
       padding: ${rm(63)} ${rm(30)} ${rm(160)} ${rm(30)};
       padding-right: 0;
       flex-direction: row-reverse;
    `}

    ${media.xsm`
       padding: ${rm(40)} ${rm(10)} ${rm(388)} ${rm(10)};
       padding-right: 0;
       padding-left: 0;
       padding-bottom: ${rm(40)};
       flex-direction: column;
    `}

`

export const ContainerInfo = styled.div`
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: ${rm(40)};

        ${media.md`
            width: 100%;
         `}
        ${media.xsm`
            gap: ${rm(20)};
            margin-left: ${rm(10)}
        `}

        >h1{
            line-height: 120%;
            color: ${colors.white1};
            font-size: rm(96);
            ${orbitronBold()}
            ${media.lg`
                line-height: 110%;
                font-size: ${rm(80)};
            `}
            ${media.md`
                margin-bottom: ${rm(20)};
            `}
            ${media.xsm`
                 line-height: 120%;
                 font-size: ${rm(48)};
                 margin: 0;
            `}
        }
`       

export const Subtitle = styled.p`
        line-height: 120%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: ${rm(32)};
        opacity: 0.75;
        color: ${colors.white1};
        width: ${rm(463)};

        ${media.lg`
            font-size: ${rm(30)} font(30);
            width: ${rm(427)};
        `}
            ${media.md`
                width: ${rm(440)};
        `}
            ${media.xsm`
                 width: ${rm(297)};
                 font-size: ${rm(20)} ;
                 margin-bottom: ${rm(20)};
        `}
`

export const Description = styled.p`
        line-height: 130%;
        letter-spacing: 0.01em;
        font-size: ${rm(24)};
        opacity: 0.6;
        color: ${colors.white2};
        width: ${rm(521)};
        ${inter()}
        ${media.lg`
            font-size: ${rm(20)};
            width: ${rm(437)};
        `}
        ${media.md`
            width: ${rm(428)};
        `}
        ${media.xsm`
            width: 100%;
        `}
`

export const ContainerNetwork = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${rm(30)};
    margin-top: ${rm(40)};

    >:nth-child(1n){
        width: ${rm(55)} !important;
    height: ${rm(55)} !important;
    }

    ${media.md`
        margin-top: ${rm(20)};
    `}
    ${media.xsm`
        margin-top: ${rm(40)};
    `}
`