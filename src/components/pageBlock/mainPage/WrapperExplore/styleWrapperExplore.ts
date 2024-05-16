import AnimatiosWords from "@/components/UI/animation/animationText/AnimationWords/AnimationWords";
import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { rm } from "@/styles/utils";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.white1};
`

export const TitleWrapper = styled.div`
    position: sticky;
    top: ${rm(80)};
    z-index: 10;
    overflow: hidden;
`

export const WrapperTitle = styled(animated.div)`
    width: fit-content;
    /* padding-left: ${rm(60)}; */
`
export const Title = styled(AnimatiosWords)`
    color: ${colors.blue1} ;
    line-height: 120%;
    z-index: 10;
    font-size: ${rm(200)};
    white-space: nowrap;
    ${orbitronBold()}
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
`

export const FunctionalityWrapperTexxt = styled.div`
 position: relative;
    width: ${rm(530)};
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    align-items: flex-start;
`

export const FunctionalityTitle = styled.p`
        font-size: ${rm(32)};
        text-transform: uppercase;
        color: ${colors.blue1} ;
        line-height: 120%;
        letter-spacing: 0.1em;
`

export const FunctionalitySubtitle = styled.p`
        font-size: ${rm(24)};
        color: ${colors.blue1} ;
        line-height: 130%;
        opacity: 0.6;
        ${inter()}
`

export const WpapperInfo : any = styled.div `
    position: sticky;
    top: 0px;
    width: 100%;
    min-height: 300vh;
    background-color: ${colors.yellow1};
    z-index: 4;
    transition: ease 0.5s;
    ${(props : any) => {
        switch(props.bgColor){
            case 0 :
            return css` background-color: rgba(255, 107, 0, 1) !important`;
            case 1 :
            return css` background-color: rgba(255, 184, 0, 1) !important`;
            case 2 : 
            return css`background-color: rgba(149, 243, 0, 1) !important`;
        }
    }}
`
export const WrapperInfoTable = styled.div`
position: sticky;
    top: ${rm(0)};
    width: 100%;
    padding-top: ${rm(380)};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`

export const WrapperTable = styled.div`
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: ${rm(120)};        
        margin-bottom: ${rm(200)};
`

export const TitleTable = styled.p`
            line-height: ${rm(120)};
            font-size: ${rm(36)};
            color: ${colors.blue1};
            ${orbitronBold()}
`

export const Table = styled.div`
            display: grid;
            grid-template: 1fr/ 1fr 1fr;
            row-gap: ${rm(50)};
            column-gap: ${rm(100)};
            color: ${colors.black1};
            >div{
                >p {
                letter-spacing: 0.1em;
                text-transform: uppercase;
                line-height: 120%;
                font-size: ${rm(32)};
                opacity: 0.8;
            }
            }
            
`




