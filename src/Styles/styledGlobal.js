import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style:none;
    font-family: 'Roboto', sans-serif;
  }
  
  main{
    background-color: #F2F4F1;
    display: flex;
    flex-direction: column;
    min-width: 398px;
  }
`;
