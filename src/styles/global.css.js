import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
    }

    html, body {
        line-height: 1.6;
        font-family: var(--ff-primary);
    }

    body {
        background: rgb(194,221,255);
        background: linear-gradient(90deg,
            rgba(194,221,255,1) 8%,
            rgba(233,201,242,1) 41%,
            rgba(183,209,240,1) 76%);
        overflow: hidden;
    }
`
export default GlobalStyle