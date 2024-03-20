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
export const rem = (value: number) => {
    return `${value / fontBase}rem`
}
export const em = (value: number) => {
    return `${value / fontBase}em`
}