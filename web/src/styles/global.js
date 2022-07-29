import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root {
    --white: #fff;
    --pink-100: #FCD3CF;
    --pink-200: #FAB7AE;
    --pink-400: #F09894;
    --pink-450: #C19A91;

    --green-300: #00B37E;
    --green-500: #00875f;
    --green-600: #245639;
    --green-800: #0C4524;

    --gray-800: #202024;
    --gray-900: #121214;
 }
 :focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-800);
}

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body {
  background: var(--pink-450);
  color: var(--green-800);

 }
 body , input , textarea , button , select {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  
  
 }
 a , button {
   cursor: pointer;
 }

`;