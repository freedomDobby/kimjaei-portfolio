import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'TheJamsil7Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil5Bold';
    src: url("/fonts/The Jamsil 4 Medium.ttf") format("truetype"); /* ✅ ttf → truetype */
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil4Bold';
    src: url("/fonts/The Jamsil 3 Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil3Bold';
    src: url("/fonts/The Jamsil 2 Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
  }

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  box-sizing: border-box; 
  
  font-family: 'TheJamsil4Bold', sans-serif;
  
  background-color: #e7ecf5ff;
  background-size: cover;
  /* position: absolute 제거 → 올바른 선택 */
}
`;
