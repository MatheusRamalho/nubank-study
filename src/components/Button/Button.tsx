import { Link } from "react-router-dom";

import { ButtonWrapper, LinkButtonWrapper } from "./Button.styled";
import { ButtonProps } from "./Button.types";

{/* --------------------------------------------------------------------------
| BUTTON...
|-------------------------------------------------------------------------- */}
export function Button({ name, isSecondary = false, ...props }: ButtonProps) {
    return (
        <ButtonWrapper
            className={`button ${isSecondary ? 'button--secondary' : ''}`}
            {...props}
        >
            {name}
        </ButtonWrapper>
    );
}

{/* --------------------------------------------------------------------------
| LINK BUTTON...
|-------------------------------------------------------------------------- */}
export function LinkButton({ name, link, isSecondary = false, ...props }: ButtonProps) {
    return (
        <LinkButtonWrapper>
            <Link
                className={`button ${isSecondary ? 'button--secondary' : ''}`}
                to={link ? link : '#'}
            >
                {name}
            </Link>
        </LinkButtonWrapper>
    );
}