'use client'
import { memo, useCallback } from 'react'
import style from './Button.module.scss'
import styled, { css } from 'styled-components'
import { fonts, orbitronBold } from '@/styles/fonts'
import { responsive, rm } from '@/styles/utils'
import { colors } from '@/styles'

interface Types {
    name: string,
    onclick?: (value?: any) => void,
    header?: boolean,
    color?: string
}

const StyledContainer = styled.button`
position: relative;
width: fit-content;
padding: ${rm(13)} ${rm(20)};
display: flex;
align-items: center;
font-size: ${rm(24)};
line-height: 120%;
cursor: pointer;
${(props: any) => {
        switch (props.color) {
            case "yellow":
                return css`
            background-color: ${colors.yellow1} ;
            color: ${colors.blue1} ;
            transition: ease 0.5s;

            &:hover {
                color: ${colors.yellow1} ;
                background-color: ${colors.black1} ;
            }
        `;
            case "white":
                return css`
                background-color: ${colors.white1};
                color: ${colors.blue1};
                transition: ease 0.5s;

                &:hover {
                    color: ${colors.white1};
                    background-color: ${colors.black1};
                }
            `
        }
    }}
        ${fonts.orbitronBold}
        ${(props: any) => props.header &&
                css`
        ${responsive.xsm`
        display: none !important;
        `}
            `
    }
`

const Button = memo((props: Types) => {
    const clock = useCallback(() => {
        if (props.onclick) {
            props.onclick()
        } else {
            return
        }
    }, [props.onclick])

    return (
        <>
            {
                props.name ?
                    <StyledContainer {...props} onClick={clock}>
                        {props.name}
                    </StyledContainer>
                    : null
            }
        </>
    )
})

export default Button
Button.displayName = 'Button'