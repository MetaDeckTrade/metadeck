import { colors } from "@/styles";
import { media, rm } from "@/styles/utils";
import Link from "next/link";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(30)};
    justify-content: space-between;
    ${media.lg`
        gap: ${rm(20)};
    `}
    ${media.md`
        order: 4;
    `}

    ${media.xsm`
        gap: ${rm(15)};
        order: 1;
        width:45%;
    `}
`

export const LinkFooterStyle = styled(Link)`
    position: relative;
    opacity: 0.75;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: ${rm(16)};
    color: ${colors.white2};
    transition: ease 0.5s;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
    ${media.lg`
        font-size: ${rm(14)};
    `}
    ${media.xsm`
        font-size: ${rm(12)};
    `}
`