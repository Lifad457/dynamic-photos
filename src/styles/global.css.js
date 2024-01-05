import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        --fw-black: 900;
        --clr-primary: whitesmoke;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        background: rgb(9,9,121);
        background: linear-gradient(0deg,
            rgba(9,9,121,0.6) 70%,
            rgba(9,9,121,0.2) 100%),
            url(${props => props.$photo});
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        @media screen and (max-width: 1200px) and (orientation: portrait) {
            background: linear-gradient(0deg,
            rgba(9,9,121,0.6) 70%,
            rgba(9,9,121,0.2) 100%),
            url(${props => props.$photo2});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        @media screen and (min-height: 1200px) {
            background: linear-gradient(0deg,
            rgba(9,9,121,0.6) 70%,
            rgba(9,9,121,0.2) 100%),
            url(${props => props.$photo});
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`
export default GlobalStyle