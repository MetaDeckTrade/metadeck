import ImageMy from "@/components/UI/ImageMy/ImageMy";
import { colors } from "@/styles";
import { inter, orbitronBold } from "@/styles/fonts";
import { marginLvh, media, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};
    padding: ${rm(80)} ${rm(60)};
    padding-top: ${rm(190)};
    background-color: ${colors.white1};
    overflow: hidden;
    /* margin-top: 100vh; */
    ${marginLvh(100)}

    ${media.lg`
        padding: ${rm(100)} ${rm(40)} ${rm(0)} ${rm(40)};
    `}
    ${media.md`
        padding: ${rm(80)} ${rm(30)} ${rm(100)} ${rm(30)};
    `}
    ${media.xsm`
        padding: ${rm(60)} ${rm(10)} ${rm(80)} ${rm(10)};
    `}
`

export const Con = styled.div`
 position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    will-change: transform;
`

export const ContainerNew = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(100)};
    padding: ${rm(80)} ${rm(60)};
    padding-top: ${rm(180)} ;
    min-height: 100vh;
    background-color: ${colors.white1};
        .wrapperCard{
            position: relative;
            display: flex;
            height: 100%;
            width: 100%;
            gap: ${rm(10)};
            align-items: center;
        }
    .containerCards{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;

        .img{
            position: relative;
            width: 100%;
            height: ${rm(320)};
            overflow: hidden;
            flex-shrink: 0;
            ${media.lg`
                height: ${rm(300)};
                `}
                ${media.xsm`
                    height: ${rm(350)};
             `}
              
            >:nth-child(1){
                position: absolute;
                left: 0%;
                top: 0%;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        
        .textContainer{
            width: 100%;
            padding: ${rm(10)};
            background-color: transparent;
            height: 100%;
          
            >p{
                line-height: 120%;
                color: #001a41;
                font-size: ${rm(30)};
                ${orbitronBold()}
                ${media.lg`
                    font-size: ${rm(24)};
                `}
                ${media.xsm`
                    font-size: ${rm(20)};
             `}
            }
        }
    }

    .wrapperListWorks{
        position: relative;
        width: 100%;
        display: grid;
        grid-template: 1fr/ 1fr 1fr 1fr 1fr;
        gap: ${rm(10)};
        >:nth-child(4n){
            .wrapperLine{
                display: none;
            }
        }
        ${media.md`
            grid-template: 1fr/ 1fr 1fr;
            >:nth-child(4n){
                .wrapperLine{
                    display: block;
                }
            }
            >:nth-child(2n){
                .wrapperLine{
                    display: none;
                }
            }
        `}
        ${media.xsm`
            grid-template: 1fr/ 1fr;
        `}
        .wrapperLine{
            position: relative;
            width: ${rm(2)};
            height: 100%;
            height: ${rm(600)}
            ${media.lg`
                height: ${rm(400)}
            `}
            ${media.xsm`
                display: none;
             `}
        }
        .line{
          position: absolute;
          left: 0%;
          top: 0%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        }

    ${media.lg`
        padding: ${rm(100)} ${rm(40)} ${rm(0)} ${rm(40)};
    `}
    ${media.md`
        padding: ${rm(140)} ${rm(30)} ${rm(100)} ${rm(30)};
    `}
    ${media.xsm`
        padding: ${rm(60)} ${rm(10)} ${rm(80)} ${rm(10)};
    gap: ${rm(30)};
    `}
`

export const WrapperTitle = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: ${rm(78)};

        ${media.lg`
        gap: ${rm(30)};
    `}
    ${media.md`
        flex-direction: column;
        gap: ${rm(60)};
    `}
    ${media.xsm`
        gap: ${rm(30)};
    `}
`

export const Title = styled.h1`
        font-size: ${rm(128)};
        line-height: 120%;
        color: ${colors.blue1} ;
        ${orbitronBold()}
        width: 100%;
        ${media.lg`
            font-size: ${rm(80)};
            line-height: 110%;
        `}
        ${media.md`
            line-height: 120%;
        `}
        ${media.xsm`
            font-size: ${rm(40)};
        `}
`

export const WrapperSybtitle = styled.div`
            position: relative;
            display: flex;
            flex-direction: column;
            gap: ${rm(30)};
            max-width: 100%;
            ${media.lg`
                gap: ${rm(34)};
                `}
                ${media.md`
                    gap: ${rm(40)};
                `}
                ${media.xsm`
                    gap: ${rm(30)};
                `}
`

export const Subtitle = styled.p`
                opacity: 0.75;
                line-height: 120%;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                font-size: ${rm(32)};
                color:${colors.blue1};
                width: ${rm(613)};
                ${media.xsm`
                     width: 100%;
                `}
               
`

export const SubtitleDescription = styled.p`
        font-size: ${rm(24)};
        line-height: 130%;
        letter-spacing: 0.01em;
        color: ${colors.blue1};
        opacity: 0.6;
        width: ${rm(516)};
        ${inter()}
        ${media.xsm`
            width: 100%;
        `}
       
`

export const Sheme = styled(ImageMy)`
     position: relative;
    width: 100%;
    height: ${rm(697)};

    ${media.md`
    height: ${rm(846)};
    `}
        ${media.xsm`
        height: ${rm(867)};
    `}
`