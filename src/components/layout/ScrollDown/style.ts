import { colors } from "@/styles";
import { orbitronBold } from "@/styles/fonts";
import { media, responsive, rm } from "@/styles/utils";
import { animated } from "@react-spring/web";
import styled from "styled-components";


export const Container = styled(animated.div)`
    position: fixed;
    bottom: ${rm(16)};
    left: ${rm(60)};
    display: flex;
    align-items: center;
    gap: ${rm(7.5)};
    opacity: 1;
    transition: opacity ease 0.5s;
    cursor: pointer;
    z-index: 101;
    mix-blend-mode: difference;
    &:hover{
        opacity: 0.7;
    }
    ${media.lg`
        left: ${rm(40)};
    `}
    ${media.md`
        left: ${rm(30)};
    `}
    ${media.xsm`
        display: none;
    `}


    >p {
        font-size: ${rm(16)};
        line-height: 120%;
        color: ${colors.white1} ;
        ${orbitronBold()}
    }

    >svg {
        position: relative;
        width: ${rm(16)};
        height: ${rm(9)};
        transition: ease 0.5s;
    }
`