import { toVars } from "./utils"

export const _colors = {
    blue1:'#001A41',
    blue2: '#001534',
    black1: '#000000',
    white1: '#FFFFFF',
    white2: '#f7f9fd',
    yellow1: '#FF6B00',
    yellow2: '#FFB800',
    grin1: '#95F300'
}


export const colors: typeof _colors = toVars(_colors)