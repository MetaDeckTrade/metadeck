import { colors } from "@/styles";
import { inter } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import { animated } from "@react-spring/web";
import styled from "styled-components";


export const Container = styled(animated.div)`
    overflow: auto;
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${colors.blue1} ;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 120;
    padding: ${rm(150)} ${rm(30)} ${rm(60)} ${rm(30)};
    display: flex;
    flex-direction: column;
    >:nth-child(1){
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${rm(20)};
    }
    .subtitle{
        font-size: ${rm(16)};
        color: ${colors.white2} ;
        letter-spacing: 0.01em;
        line-height: 130%;
        max-width: ${rm(200)};
        opacity: 0.6;
        margin-top: ${rm(50)};
        ${inter()}
        display: none;
        ${media.xsm`
            display: block;
        `}
    }
    ${media.xsm`
        padding: ${rm(120)} ${rm(10)} ${rm(20)} ${rm(10)};
    `}
`

export const WrapperNetwork = styled.div`
    position: relative;
    align-items: center;
    gap: ${rm(21)};
    margin-top: auto;
    display: none;
    ${media.xsm`
        display: flex;
    `}
    
`