import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`
export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 700px;
`
export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 0 4rem;
    color: #22395d;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0.5);

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        line-height: 1.3;
    }

    h3 {
        font-size: 1.5rem;
        text-align: justify;
    }
`
const myFadeOut = keyframes`
    from {
        transform: rotate(${props => props.$index}deg);
    }
    to {
        transform: rotate(-20deg) translateX(-500px);
        opacity: 0;
    }
`
const myFadeIn = keyframes`
    from {
        transform: rotate(-20deg) translateX(-500px);
    }
    to {
        transform: rotate(${props => props.$index}deg);
        opacity: 1;
    }
`
const animation = props =>
    props.$faded ? 
        css`${myFadeIn} 1.5s ease-out` : css`${myFadeOut} 1.5s ease-out`
    
export const Wrapper = styled.div`
    position: absolute;
    min-width: 400px;
    min-height: 600px;
    border-radius: 1.2rem;
    background-image: url(${props => props.$photo});
    background-size: cover;
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.5);
    background-color: #333;
    transform: rotate(${props => props.$index}deg);
    z-index: ${props => props.$index};
    animation: ${animation};
    animation-fill-mode: forwards;
    border: 10px solid whitesmoke;
`
export const StyledLink = styled(Link)`
    display: inline-block;
    align-self: flex-start;
    text-decoration: none;
    color: #22395d;
    background-color: transparent;
    font-size: 1.5rem;
    margin-top: 3rem;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #22395d;

    span {
        font-size: 1.3rem;
    }
    transition: 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);
    }
`