import Link from "next/link";
import styled from "styled-components";
import { media, rm } from "@/styles/utils";
import { colors } from "@/styles";
import { lenis } from '@/layouts/ScrollLayout/ScrollLayout';

interface Types{
    href: string,
    name: string,
    onClick?: any
}

export default function LinkHeader({href, name, onClick} : Types){
    const StyleLineAnimation = styled.a`
        text-transform: uppercase;
        line-height: 150%;
        color: ${colors.white2} ;
        font-size: ${rm(16)};
        letter-spacing: 0.1em;
        cursor: pointer;
        opacity: 0.75;
        transition: ease 0.5s;
        &:hover{
            opacity: 1;
        }
        
        ${media.md`
            font-size: ${rm(32)};
        `}
    `

    return(
        <>
            {
                href ? 
                    <StyleLineAnimation onClick={() => {
                        lenis.current?.scrollTo(href)
                        onClick()
                    }} >
                        {name}
                    </StyleLineAnimation>
                : null
            }
        </>
    )
}