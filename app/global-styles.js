import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p {
    font-family: Georgia, Times, 'Times New Roman', serif;
    // line-height: 1.5em;
     
  }
   .footer{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 150px;
  }
  .bg {
    background-image: linear-gradient(#3b83c3, #0c3f6c) !important;
  }
`;

export default GlobalStyle;
