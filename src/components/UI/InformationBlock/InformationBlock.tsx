import AnimationBlockY from "../animation/animationBlock/AnimationBlockY/AnimationBlockY";
import AnimatiosPharagraphTwo from "../animation/animationText/AnimationPatagraph/AnimationPatagraph";
import LineAnimation from "../animation/animationText/AnimationLine/AnimationLine";
import React from 'react';
import styled from "styled-components";
import { media, responsive, rm } from '../../../styles/utils'
import { orbitronBold } from "@/styles/fonts";
import { colors } from "@/styles";

interface Types {
    number: string,
    title: string,
    text: string,
    delay?: number
    props?: any
}
const ContainerStyle = styled.div`
position: relative;
width: fit-content;
display: flex;
flex-direction: column;
gap: ${rm(30)};
`
const WrapperNumer = styled.div`
position: relative;
width: ${rm(100)};
height: ${rm(75)};
display: flex;
align-items: center;
justify-content: center;

>svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
}
>p{
    color: ${colors.yellow1};
    line-height: 120%;
    text-align: center;
    opacity: 0.6;
    font-size: ${rm(36)};
}
`

const StyleAnimatiosPharagraphTwo = styled(AnimatiosPharagraphTwo)`
color: ${colors.white1};
font-size: ${rm(36)};
line-height: 120%;
margin-top: ${rm(50)};
max-width: ${rm(530)};
overflow: hidden;
${orbitronBold}
${media.xsm`
max-width: 100%;
    margin-top: ${rm(30)};
`}
`

const StyleLineAnimation = styled(LineAnimation)`
position: relative;
width: ${rm(424)} !important;
overflow: hidden;
${media.xsm`
width: 100% !important;
`}
`
export default function InformationBlock({ number, delay = 0, title, text, ...props }: Types) {
   
    return (
        <ContainerStyle  {...props}>
            <AnimationBlockY duration={600} delay={delay}>
                <WrapperNumer >
                    <svg width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H88L100 12V75H0V0Z" fill="#001A41" />
                    </svg>
                    <p>{number}</p>
                </WrapperNumer>
            </AnimationBlockY>
            <StyleAnimatiosPharagraphTwo
                duration={600}
                text={title} delay={200 + delay} />
            <StyleLineAnimation delay={delay + 400} >
                {text}
            </StyleLineAnimation>
        </ContainerStyle>
    )
}