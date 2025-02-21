import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #f5f6fa;
  }
    html, body, #root {
  width: 100%;
  min-width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}
    
`;