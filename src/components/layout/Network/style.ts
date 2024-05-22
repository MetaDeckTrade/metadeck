import { media, responsive, rm } from "@/styles/utils";
import { animated } from "@react-spring/web";
import styled from "styled-components";


export const Container = styled(animated.div)`
        position: fixed;
    right: ${rm(60)};
    z-index: 50;
    bottom: ${rm(16)};
    display: flex;
    align-items: center;
    gap: ${rm(21)};
    mix-blend-mode: difference;
    ${media.lg`
        right: ${rm(40)};
        `}
   
   ${media.md`
        right: ${rm(30)};
        `}
        ${media.xsm`
                display: none;
        `}
`