import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { responsive, rm } from "@/styles/utils";
import Image from "next/image";

import styled from "styled-components";


export const CompatibleWhereCountsStyle = styled.div`
    position: sticky;
    bottom: 0;
    background-color: ${colors.white1};
    width: 100%;
    padding: ${rm(80)} ${rm(0)} ${rm(210)} ${rm(0)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    ${responsive.lg`
        padding: ${rm(80)} ${rm(0)} ${rm(214)} ${rm(0)};
    `}
    ${responsive.md`
        padding: ${rm(100)} ${rm(0)} ${rm(175)} ${rm(0)};
    `}
    ${responsive.xsm`
        padding: ${rm(80)} ${rm(0)} ${rm(128)} ${rm(0)};
    `}

    >h1 {
        line-height: 120%;
        width: ${rm(915)};
        color: ${colors.blue1};
        font-size: ${rm(96)};
        margin-left: ${rm(60)};
        ${orbitronBold()}
        ${responsive.lg`
            font-size: ${rm(80)};
            line-height: 110%;
            width: ${rm(765)};
            margin-left: ${rm(40)};
        `}
        ${responsive.md`
            line-height: 120%;
            margin-left: ${rm(30)};
        `}
        ${responsive.xsm`
            width: 100%;
            font-size:  ${rm(48)};
            margin: 0;
            padding-left: ${rm(10)};
            padding-right: ${rm(10)};
        `}
    
    }
    
`

export const Text = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        padding-right: ${rm(131)};
        margin-top: ${rm(45)};
        ${responsive.lg`
            margin-top: ${rm(62)};
            padding-right: ${rm(194)};
        `}

${responsive.md`
            margin-top: ${rm(40)};
            padding-right: ${rm(0)};
        justify-content: flex-start;
        padding-left: ${rm(30)};
        `}

        ${responsive.xsm`
            margin-top: ${rm(20)};
            padding-left: ${rm(10)};
            padding-right: ${rm(10)};
        `}


        >p {
            width: ${rm(516)};
            color: ${colors.black1};
            font-size: ${rm(24)};
            line-height: 130%;
            letter-spacing: 0.01em;
            opacity: 0.6;
            ${inter()}
            ${responsive.lg`
                font-size: ${rm(20)} ;
            
        `}
        ${responsive.md`
                font-size: ${rm(24)} ;
            
        `}
        ${responsive.xsm`
                font-size: ${rm(18)} ;
                width: 100%;
        `}
          
        }
`

export const SwiperSlideImage = styled(Image)`
    position: relative;
    width: 100%;
    height: ${rm(256)};
    ${responsive.lg`
        height: ${rm(195)};
        `}
         ${responsive.md`
        height: ${rm(224)};
        `}
        ${responsive.xsm`
        height: ${rm(125)};
        `}
 
`