import { Link } from "react-router-dom";

import { DropdownItemWrapper, DropdownMenuWrapper } from "./Dropdown.styled";
import { DropdownItemProps, DropdownProps } from "./Dropdown.types";

{/* --------------------------------------------------------------------------
| DROPDOWN MENU...
|-------------------------------------------------------------------------- */}
export const DropdownMenu = ({ children, isActive = false }: DropdownProps) => {
    return (
        // className={`dropdown-menu ${isActive ? 'dropdown-menu--active' : ''}`}
        <DropdownMenuWrapper className="dropdown-menu">
            {children}
        </DropdownMenuWrapper>
    );
}

{/* --------------------------------------------------------------------------
| DROPDOWN ITEM...
|-------------------------------------------------------------------------- */}
export const DropdownItem = ({ name, link }: DropdownItemProps) => {
    return (
        <DropdownItemWrapper className="dropdown-item">
            <Link
                className="dropdown-link"
                to={link ? link : '#'}
            >
                {name}
            </Link>
        </DropdownItemWrapper>
    );
}
