import { Link } from "react-router-dom";

import { LinkButtonWrapper } from "./LinkButton.styled";
import { LinkButtonProps } from "./LinkButton.types";

{/* --------------------------------------------------------------------------
| LINK BUTTON...
|-------------------------------------------------------------------------- */}
export function LinkButton({ name, link, children, isSecondary = false, isTertiary = false, isQuaternary = false }: LinkButtonProps) {
    return (
        <LinkButtonWrapper
            className={`link-button ${isSecondary ? 'link-button--secondary' : ''} ${isTertiary ? 'link-button--tertiary' : ''} ${isQuaternary ? 'link-button--quaternary' : ''}`}
            to={link ? link : '#'}
        >
            {name ? name : ''}
            {children}
        </LinkButtonWrapper>
    );
}