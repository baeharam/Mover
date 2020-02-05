import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  * {
    user-select: none;
  }
  input {
    font-family: inherit;
    outline: none;
  }
  button {
    border: none;
    font: inherit;
  }
`;

export default GlobalStyle;
