import { colors } from "@/styles";
import { inter } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${rm(30)};
    ${media.md`
        order: 4;
        gap: ${rm(34)};
    `}
    ${media.xsm`
        gap: ${rm(15)};
    `}
   
    >p{
        opacity: 0.6;
        line-height: 130%;
        letter-spacing: 0.01em;
        font-size: ${rm(20)};
        color: ${colors.white2};
        ${inter()}
        ${media.lg`
        font-size: ${rm(14)};
        `}
      
    }
    >:nth-child(2){
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${rm(20)};
        
    }
`