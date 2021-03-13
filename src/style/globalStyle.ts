import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";

export const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    color: black;
    font-family: 'raleway';
    font-weight: bold;
}

*, *::hover, *::after{
    box-sizing: inherit;
    font-display: swap;
    font-family: "Montserrat";
}

a {
    text-decoration: none !important;
}
`;
