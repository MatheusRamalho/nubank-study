import { Link } from "react-router-dom";

import { LinkButtonWrapper } from "./LinkButton.styled";
import { LinkButtonProps } from "./LinkButton.types";

{/* --------------------------------------------------------------------------
| LINK BUTTON...
|-------------------------------------------------------------------------- */}
export function LinkButton({ name, link, isSecondary = false, isTertiary = false, children }: LinkButtonProps) {
    return (
        <LinkButtonWrapper
            className={`link-button ${isSecondary ? 'link-button--secondary' : ''} ${isTertiary ? 'link-button--tertiary' : ''}`}
            to={link ? link : '#'}
        >
            {name ? name : ''}
            {children}
        </LinkButtonWrapper>
    );
}