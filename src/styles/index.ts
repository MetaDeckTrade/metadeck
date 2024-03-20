import { createGlobalStyle } from "styled-components"

import { normalize } from "./normalize"

import { printVars } from "./utils"
import { _colors } from "./colors"

// Global css
const GlobalStyles = createGlobalStyle`
    // Variables 
    :root {
        ${printVars(_colors, 'color')}
    }

    ${normalize}
`

// Exports
export default GlobalStyles
export { colors } from './colors'
export { fonts } from './fonts'