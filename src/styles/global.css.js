import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;

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
    }
`
export default GlobalStyle