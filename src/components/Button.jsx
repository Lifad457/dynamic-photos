import { StyledLink } from "../styles/app.css";

export default function Button({ children }) {
    return (
        <StyledLink to="#">
            {children}
        </StyledLink>
        
    )
}