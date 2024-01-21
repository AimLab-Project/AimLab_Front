import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {

  }
  button {
    border: none;
  }

  ul > li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyles
