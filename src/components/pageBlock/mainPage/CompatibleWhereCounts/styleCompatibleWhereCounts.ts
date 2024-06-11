import ImageMy from "@/components/UI/ImageMy/ImageMy";
import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { heightLvh, marginLvh, media, rm } from "@/styles/utils";

import styled from "styled-components";


export const Stiky = styled.div`
    position: relative;
    /* ${marginLvh(-100)}
    ${heightLvh(200)} */
    background-color: ${colors.white1} ;

`
export const StikyNew = styled.div`
    position: sticky;
    top: 0; left: 0;
    width: 100%;
    background-color: ${colors.white1} ;
    `

export const CompatibleWhereCountsStyle = styled.div`
    position: sticky;
    bottom: 0;
    background-color: ${colors.white1};
    width: 100%;
    padding: ${rm(160)} ${rm(0)} ${rm(210)} ${rm(0)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    ${media.lg`
        padding: ${rm(80)} ${rm(0)} ${rm(214)} ${rm(0)};
    `}
    ${media.md`
        padding: ${rm(100)} ${rm(0)} ${rm(175)} ${rm(0)};
    `}
    ${media.xsm`
        padding: ${rm(80)} ${rm(0)} ${rm(128)} ${rm(0)};
    `}

    >h1 {
        line-height: 120%;
        width: ${rm(915)};
        color: ${colors.blue1};
        font-size: ${rm(96)};
        margin-left: ${rm(60)};
        ${orbitronBold()}
        ${media.lg`
            font-size: ${rm(80)};
            line-height: 110%;
            width: ${rm(765)};
            margin-left: ${rm(40)};
        `}
        ${media.md`
            line-height: 120%;
            margin-left: ${rm(30)};
        `}
        ${media.xsm`
            width: 100%;
            font-size:  ${rm(48)};
            margin: 0;
            padding-left: ${rm(10)};
            padding-right: ${rm(10)};
        `}
    
    }
    
`

export const CompatibleWhereCountsStyleNew = styled.div`
     overflow: hidden; 
    will-change: transform; 
    position: relative;
    background-color: ${colors.white1};
    width: 100%;
    padding: ${rm(80)} ${rm(0)} ${rm(210)} ${rm(0)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    ${media.lg`
        padding: ${rm(80)} ${rm(0)} ${rm(214)} ${rm(0)};
    `}
    ${media.md`
        padding: ${rm(100)} ${rm(0)} ${rm(175)} ${rm(0)};
    `}
    ${media.xsm`
        padding: ${rm(80)} ${rm(0)} ${rm(128)} ${rm(0)};
    `}

    >h1 {
        line-height: 120%;
        width: ${rm(915)};
        color: ${colors.blue1};
        font-size: ${rm(96)};
        margin-left: ${rm(60)};
        ${orbitronBold()}
        ${media.lg`
            font-size: ${rm(80)};
            line-height: 110%;
            width: ${rm(765)};
            margin-left: ${rm(40)};
        `}
        ${media.md`
            line-height: 120%;
            margin-left: ${rm(30)};
        `}
        ${media.xsm`
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
        ${media.lg`
            margin-top: ${rm(62)};
            padding-right: ${rm(194)};
        `}

${media.md`
            margin-top: ${rm(40)};
            padding-right: ${rm(0)};
        justify-content: flex-start;
        padding-left: ${rm(30)};
        `}

        ${media.xsm`
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
            ${media.lg`
                font-size: ${rm(20)} ;
            
        `}
        ${media.md`
                font-size: ${rm(24)} ;
            
        `}
        ${media.xsm`
                font-size: ${rm(18)} ;
                width: 100%;
        `}
          
        }
`

export const SwiperSlideImage = styled(ImageMy)`
    position: relative;
    width: 100%;
    height: ${rm(256)};
    ${media.lg`
        height: ${rm(255)};
        `}
         ${media.md`
        height: ${rm(224)};
        `}
        ${media.xsm`
        height: ${rm(125)};
        width: ${rm(185)};
        `}
 
`