import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${variables.quinaryColor};
    font-family: 'Roboto', sans-serif;
    font-size: ${variables.fontSizes.base};
    font-weight: 400;
    margin: 0;
    padding: 0;
  }`