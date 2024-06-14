import AnimatiosWords from "@/components/UI/animation/animationText/AnimationWords/AnimationWords";
import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { heightLvh, media, rm } from "@/styles/utils";
import { CSS, animated } from "@react-spring/web";
import styled, { css } from "styled-components";

export const WrapperImageMb = styled(animated.div)`
    position: sticky;
    top: 0;
    height: ${rm(375)};
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.white1};
    z-index: 1;
`

export const TitleWrapper = styled.div`
    position: sticky;
    top: ${rm(80)};
    z-index: 10;
    overflow: hidden;
    /* height: 100vh; */
    pointer-events: none;
    ${heightLvh(100)}
    
`

export const WrapperTitle = styled(animated.div)`
    width: fit-content;
    padding-left: ${rm(60)};
    padding-right: ${rm(60)};
    ${media.md`
     padding-left: ${rm(30)};
    padding-right: ${rm(30)};
    `}
    ${media.xsm`
     padding-left: ${rm(10)};
    padding-right: ${rm(10)};
    `}
`
export const Title = styled(AnimatiosWords)`
    color: ${colors.blue1} ;
    line-height: 120%;
    z-index: 10;
    font-size: ${rm(200)};
    white-space: nowrap;
    ${orbitronBold()}
    ${media.lg`
        font-size: ${rm(180)};
    `}
    ${media.md`
        font-size: ${rm(140)};
    `}
    ${media.xsm`
        font-size: ${rm(48)};
    `}
`

export const Functionality = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.white1};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: ${rm(315)};
    z-index: 5;
    ${media.lg`
        padding-right: ${rm(200)};
    `}
    ${media.md`
        padding-right: ${rm(30)};
        padding-left: ${rm(30)};
        justify-content: flex-start;
    `}
    ${media.xsm`
        padding-right: ${rm(10)};
        padding-left: ${rm(10)};
        align-items: flex-end;
        padding-bottom:  ${rm(40)};
    `}
`

export const FunctionalityWrapperTexxt = styled.div`
 position: relative;
    width: ${rm(530)};
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    align-items: flex-start;
    ${media.lg`
        gap: ${rm(32)};
    `}
    ${media.md`
        gap: ${rm(24)};
    `}
    ${media.xsm`
        width: 100%;
    `}
    
`

export const FunctionalityTitle = styled.p`
        font-size: ${rm(32)};
        text-transform: uppercase;
        color: ${colors.blue1} ;
        line-height: 120%;
        letter-spacing: 0.1em;
        ${media.lg`
            font-size: ${rm(30)};
        `}
        ${media.md`
            font-size: ${rm(24)};
        `}
        ${media.xsm`
            font-size: ${rm(16)};
        `}
`

export const FunctionalitySubtitle = styled.p`
        font-size: ${rm(24)};
        color: ${colors.blue1} ;
        line-height: 130%;
        opacity: 0.6;
        ${inter()}
        ${media.lg`
            font-size: ${rm(20)};
        `}
        ${media.md`
            font-size: ${rm(16)};
        `}
        ${media.xsm`
            font-size: ${rm(14)};
        `}
`


export const WrapperInfoTable = styled.div`
position: sticky;
    top: ${rm(0)};
    width: 100%;
    /* padding-top: ${rm(380)}; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    ${heightLvh(100)}
    ${media.lg`
        gap: ${rm(100)};        
    `}
`

export const WrapperTable = styled.div`
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: ${rm(120)};   
        padding-bottom: ${rm(100)};
        ${media.lg`
            gap: ${rm(100)};        
        `}
        ${media.md`
            gap: ${rm(212)};    
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: flex-start; 
            padding-left: ${rm(30)};
            padding-right: ${rm(30)};
        `}
        ${media.xsm`
            gap: ${rm(30)};    
            flex-direction: column;
            width: 100%;
            justify-content: space-between;
            padding-left: ${rm(75)};
            padding-right: ${rm(10)};
            padding-bottom: ${rm(32)};
        `}
        
`

export const TitleTable = styled.p`
            line-height: 120%;
            font-size: ${rm(36)};
            color: ${colors.blue1};
            ${orbitronBold()}
            white-space: nowrap;
            ${media.md`
                font-size: ${rm(24)};
            `}
`

export const Table = styled.div`
            display: grid;
            grid-template: 1fr/ 1fr 1fr;
            row-gap: ${rm(98)};
            column-gap: ${rm(300)};
            color: ${colors.black1};
          

            ${media.lg`
                row-gap: ${rm(98)};
                column-gap: ${rm(200)};
            `}
            ${media.md`
                row-gap: ${rm(80)};
                column-gap: ${rm(180)};
               
            `}
            ${media.xsm`
                gap: ${rm(30)};
                grid-template: 1fr/ 1fr;
            `}
            /* >div{
                >p {
                letter-spacing: 0.1em;
                text-transform: uppercase;
                line-height: 120%;
                font-size: ${rm(32)};
                opacity: 0.8;
            }
            } */
`


export const WrapperImage = styled(animated.div)`
        position: sticky;
        /* padding-bottom: 100vh; */width: 100%;
        height: 100vh;
        top: 0;
        z-index: 22;
        pointer-events: none;
        >img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        /* height: 100vh; */
        height: 100%;
            object-fit: cover;
        }
`


export const WrapperImageContainer = styled(animated.div)`
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        /* >:nth-child(1){
            position: relative;
            height: 100%;
        } */
        >:nth-child(1){
            position: absolute;
            left: 0;
            bottom: 0;
        height: 100vh;
            width: 100%;
            object-fit: cover;
            pointer-events: none;
            z-index: 2;
        }
`
export const WrapperText = styled(animated.div)`
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${rm(20)};
        >div{
                >p {
                letter-spacing: 0.1em;
                text-transform: uppercase;
                line-height: 120%;
                font-size: ${rm(32)};
                opacity: 0.8;
                ${media.lg`
                    font-size: ${rm(30)};
                `}
                ${media.md`
                    font-size: ${rm(20)};
                `}
            }
        }
        .icon{
            position: relative;
            width: ${rm(16)};
            height: ${rm(16)};
            flex-shrink: 0;
        }
        
`
export const WpapperInfo: any = styled.div`
    position: sticky;
    top: 0px;
    width: 100%;
    min-height: 400vh;
    background-color: ${colors.yellow1};
    z-index: 4;
    transition: ease 0.5s;   
`