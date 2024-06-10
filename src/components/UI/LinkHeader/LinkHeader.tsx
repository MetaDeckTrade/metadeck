import styled from "styled-components";
import { media, rm } from "@/styles/utils";
import { colors } from "@/styles";
import { lenis } from '@/layouts/ScrollLayout/ScrollLayout';
import { useCallback } from "react";

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

interface Types{
    href: string,
    name: string,
    onClick?: any,
    anchor: string
}

export default function LinkHeader({href, name, onClick, anchor} : Types){
    const click = useCallback((e : any) => {
        if(href) { return }
        e.preventDefault()
        if(onClick){
            onClick()
        }
        if(anchor){
            lenis.current?.scrollTo(anchor)
        }
    },[href, onClick, anchor])
    return(
        <>
            {
                name ? 
                    <StyleLineAnimation href={href} onClick={(e : any) => click(e)} >
                        {name}
                    </StyleLineAnimation>
                : null
            }
        </>
    )
}