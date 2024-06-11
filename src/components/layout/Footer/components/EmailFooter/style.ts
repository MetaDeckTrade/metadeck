import { colors } from "@/styles";
import { inter } from "@/styles/fonts";
import { media, rm } from "@/styles/utils";
import Link from "next/link";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    justify-content: space-between;
    ${media.lg`
        gap: ${rm(25)};
    `}
    ${media.md`
        order: 3;
    `}

    ${media.xsm`
        gap: ${rm(15)};
    `}
    .title{
        opacity: 0.6;
        line-height: 130%;
        letter-spacing: 0.01em;
        font-size: ${rm(20)};
        color: ${colors.white2};
        ${inter()}
        ${media.lg`
            font-size: ${rm(14)};
        `}
       
    }
    >:nth-child(2){
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: ${rm(10)};
        ${media.md`
            gap: ${rm(15)};
        `}
    }
`

export const Email = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rm(10)};
    cursor: pointer;
    ${media.md`
            gap: ${rm(8)};
        `}
    
>p{
    transition: ease 0.5s;

    opacity: 0.6;
    line-height: 130%;
    letter-spacing: 0.01em;
    font-size: ${rm(16)};
    ${inter()}
    ${media.lg`
            font-size: ${rm(14)};
    `}

}
.icon{
    position: relative;
    width: ${rm(24)};
    height: ${rm(24)};
}
&:hover{
>p{
    opacity: 1;
}
}
`