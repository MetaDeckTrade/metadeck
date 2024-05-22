import { colors } from "@/styles";
import { media, rm } from "@/styles/utils";
import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.blue1};
    padding: ${rm(40)}  ${rm(60)} ${rm(50)} ${rm(60)};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${rm(70)};
    z-index: 100;
    ${media.lg`
        gap: ${rm(40)};
        padding: ${rm(40)};
    `}

    ${media.md`
        column-gap: ${rm(100)};
        row-gap: ${rm(40)};
        padding: ${rm(40)} ${rm(30)};
        display: grid;
        grid-template: 1fr/ 1fr 1fr 1fr;
    `}

    ${media.xsm`
        display: flex;
        /* flex-direction: column; */
         flex-wrap: wrap;
        grid-template: none;
        row-gap: ${rm(30)};
        column-gap: ${rm(5)};
        padding: ${rm(40)} ${rm(10)};
    `}
`