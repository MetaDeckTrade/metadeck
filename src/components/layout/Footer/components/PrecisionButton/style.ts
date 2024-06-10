import { colors } from "@/styles";
import { inter } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(30)};
    justify-content: space-between;
    ${media.lg`
        gap: ${rm(20)};
    `}
    ${media.md`
        gap: ${rm(15)};
        order: 2;

    `}
    ${media.xsm`
        order: 2;
        >:nth-child(2){
            width: 100% !important;
            justify-content: center;
         }
    `}
    .subtitle{
        opacity: 0.6;
        color: ${colors.white2};
        line-height: 130%;
        letter-spacing: 0.01em;
        font-size: ${rm(16)};
        ${inter()}
        ${media.lg`
             font-size: ${rm(14)};
        `}
        ${media.xsm`
            width: ${rm(165)};
        `}
    }
`