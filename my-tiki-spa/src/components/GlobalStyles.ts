import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  // Reset CSS
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-dark-purple-main);
    color: var(--color-off-white);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    background-image: url('/src/assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-size: var(--font-size-body);
    font-weight: var(--font-weight-body);
  }

  h1 {
    font-size: var(--font-size-36);
    font-weight: var(--font-weight-bold);
    color: var(--color-branco);
    font-family: var(--font-family-montserrat);
  }

  h2{
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-bold);
    color: var(--color-branco);
    font-family: var(--font-family-montserrat);
  }
  :root {
    // Cores
    --color-roxo-principal: #280031;
    --color-roxo-alt: #26093A;
    --color-rosa: #FC2BEE;  
    --color-roxo-vibrante: #8F0DFF;
    --color-branco: #FFFFFF;

     // Fontes
    --font-weight-bold: 700;
    --font-weight-regular: 400; 

    --font-size-36: 36px;
    --font-size-24: 24px; 
    --font-size-18: 18px;
    --font-size-14: 14px; 
    --font-size-12: 12px;
    --font-size-10: 10px; 
  }
`;

export default GlobalStyles;