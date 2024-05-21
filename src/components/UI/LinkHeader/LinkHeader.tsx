import Link from "next/link";
import style from './LinkHeader.module.scss'
import styled from "styled-components";
import { media, responsive, rm } from "@/styles/utils";
import { colors } from "@/styles";

interface Types{
    href: string,
    name: string
}

export default function LinkHeader({href, name} : Types){
    const StyleLineAnimation = styled(Link)`
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
            <StyleLineAnimation href={href} >
                {name}
            </StyleLineAnimation>
            : null
        }
        </>
    )
}