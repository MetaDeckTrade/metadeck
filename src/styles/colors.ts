import { toVars } from "./utils"

export const _colors = {
    // Primary
    primary900: '#0F0F0F',
    primary800: '#292929',
    primary700: '#424242',
    primary600: '#5C5C5C',
    primary500: '#757575',
    primary400: '#8F8F8F',
    primary300: '#A8A8A8',
    primary200: '#C2C2C2',
    primary100: '#DBDBDB',
    primary50:  '#F5F5F5',


    // Accent
    accentBlue:  '#4685FF',
    accentRed:   '#D10000',
    accentGreen: '#21725E',
}


export const colors: typeof _colors = toVars(_colors)