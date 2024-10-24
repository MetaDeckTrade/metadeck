import { colors } from "@/styles";
import { media, responsive, rm } from "@/styles/utils";
import styled, { css } from "styled-components";


export const StyledcontainerWrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.blue2};
`

export const ContainerStyled = styled.div`
    
    position: relative;
   
    width: 100%;
    padding: ${rm(0)} ${rm(60)} ${rm(160)} ${rm(60)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${rm(160)};
    justify-content: space-between;
    z-index: 3; //6
    /* background-color: ${colors.blue2}; */

    ${media.lg`
       padding: ${rm(0)} ${rm(40)} ${rm(120)} ${rm(40)};
       gap: ${rm(120)};
    `}
    ${media.md`
       padding: ${rm(0)} ${rm(30)} ${rm(80)} ${rm(30)};
       gap: ${rm(80)};
    `}
    ${media.xsm`
       padding: ${rm(0)} ${rm(10)} ${rm(80)} ${rm(10)};
    `}

`

export const WrapperContent = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;

        /* ${(props : any) => {
 switch (props.position) {
    case 'center':
        return css`justify-content: 'center'`
    case 'end':
        return css`justify-content: 'flex-end'`
    case 'start':
        return css`justify-content: 'flex-start'`
}
        }} */
`