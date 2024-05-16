//@ts-nocheck

import { css } from "styled-components"
export const breakpoints = {
    xlg: '1920px',
    lg: '1440px',
    md: '1024px',
    xsm: '576px',
  };
  
  export const fontSizes = {
    xlg: '0.833333333vw',
    lg: '1.11111111111vw',
    md: '1.5625vw',
    xsm: '4.1025641vw',
  };
export const fontBase = 16
export const varTemplate = (key: string, type: 'color' = 'color') => `--${type}-${key}`
export const toVars = (values: {[key:string]: string}) => {
    const newValues: any = {}
    for (const key in values) {
        newValues[key] = `var(${varTemplate(key)})`
    }
    return newValues
}
export const printVars = (vars: {[key:string]: string}, type: 'color' = 'color') => {
    let string = ''
    for (const key in vars) {
        string += `${varTemplate(key, type)}: ${vars[key]};\n`
    }
    return string
}
export const rm = (value: number) => {
    return `${value / fontBase}rem`
}

export const em = (value: number) => {
    return `${value / fontBase}em`
}

export const responsive = {
    lg: (...args: any) => css`
      @media screen and (max-width: ${breakpoints.lg}) {
        ${css(...args)};
      }
    `,
  
    md: (...args: any) => css`
      @media screen and (max-width: ${breakpoints.md}) {
        ${css(...args)};
      }
    `,
  
    xsm: (...args: any) => css`
      @media screen and (max-width: ${breakpoints.xsm}) {
        ${css(...args)};
      }
    `,
  };
  
  

export const lvh = (value: number) => {
    return `
        height: calc(var(--vh ,1lvh) * ${value});
    `
}