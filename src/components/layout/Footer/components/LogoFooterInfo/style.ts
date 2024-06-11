import { colors } from "@/styles";
import { fonts, inter, orbitronBold } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import styled from "styled-components";



export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(30.5)};
    ${media.lg`
        gap: ${rm(20)};
    `}
    ${media.md`
        gap: ${rm(16)};
        order: 1;
    `}
    ${media.xsm`
        order: 5;
        flex-direction: row;
        justify-content: space-between;
    `}
`

export const WrapperLogo = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${rm(5)};
   
    .logo{
        position: relative;
        width: ${rm(50)};
        height: ${rm(25)};
        ${media.lg`
            width: ${rm(40)};
            height: ${rm(20)};
        `}
        ${media.md`
            width: ${rm(58.3)};
            height: ${rm(20)};
        `}
        ${media.xsm`
            width: ${rm(38)};
            height: ${rm(19)};
        `}
    }
    .logoName{
        ${orbitronBold()}
        font-size: ${rm(18)};
        line-height: 110%;
        color: ${colors.white1};
        ${media.md`
            font-size: ${rm(20)};
        `}
        ${media.xsm`
        font-size: ${rm(16)};

        `}
    }
`
export const WrapperDescription = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(9)};
    ${media.lg`
        gap: ${rm(20)};
    `}
    ${media.md`
        gap: ${rm(14)};
    `}
    ${media.xsm`
        gap: ${rm(5)};
    `}
    >:nth-child(1){
        ${inter()}
        font-size: ${rm(16)};
        opacity: 0.6;
        color: ${colors.white2};
        line-height: 130%;
        letter-spacing: 0.01em;
        ${media.lg`
            font-size: ${rm(14)};
        `}
        ${media.xsm`
        display: none;
    `}
    }
    >:nth-child(2){
        ${inter()}
        font-size: ${rm(12)};
        opacity: 0.6;
        color: ${colors.white2};
        line-height: 130%;
        letter-spacing: 0.01em;
        ${media.lg`
            font-size: ${rm(10)};
        `}
    }
`
export const StylePMobile = styled.p`
        ${inter()}
        font-size: ${rm(14)};
        opacity: 0.6;
        color: ${colors.white2};
        line-height: 130%;
        letter-spacing: 0.01em;
        width: ${rm(163)};
        display: none;
        ${media.xsm`
            display: block;
        `}
`

export const ContainerWrapperLogoMobile = styled.div`
    position: relative;
    width: ${rm(150)};
    display: flex;
    flex-direction: column;
    gap: ${rm(5)};
    >:last-child{
        ${inter()}
        opacity: 0.6;
        color: ${colors.white2};
        line-height: 130%;
        letter-spacing: 0.01em;
        font-size: ${rm(10)};
    }
`