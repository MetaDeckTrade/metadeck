//@ts-nocheck
import { createGlobalStyle, css } from "styled-components"
export const breakpoints = {
  xlg: '1920px',
  lg: '1440px',
  md: '1024px',
  xsm: '576px',
} as const;

export const fontSizes = {
  xlg: '0.833333333vw',
  lg: '1.11111111111vw',
  md: '1.5625vw',
  xsm: '4.1025641vw',
} as const;

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

type Breakpoints = keyof typeof breakpoints;

type Media = {
  [key in Breakpoints]: (...args: [TemplateStringsArray, ...SimpleInterpolation[]]) => CSSObject;
};

export const media: Media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label as Breakpoints] = (...args: [TemplateStringsArray, ...SimpleInterpolation[]]) => css`
    @media (max-width: ${breakpoints[label as Breakpoints]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {} as Media);

export const heightLvh = ($value) => {
  return css`
  height: ${$value}vh;
  height: ${$value}lvh;
  height: calc(var(--vh, 1lvh) * ${$value});
  `
} 
export const marginLvh = ($value) => {
  return css`
    margin-top: ${$value}vh;
    margin-top: ${$value}lvh;
    margin-top: calc(var(--vh, 1lvh) * ${$value});
  `
} 

export const ResponceGrid = createGlobalStyle`
  html {
    font-size: ${fontBase};

    ${media.xlg`
       font-size: ${fontSizes.xlg} !important; 
    `}

    ${media.lg`
      font-size: ${fontSizes.lg} !important;
    `}

    ${media.md`
      font-size: ${fontSizes.md} !important;
    `}

    ${media.xsm`
      font-size: ${fontSizes.xsm} !important;
    `}
  }
`;

export default ResponceGrid;
