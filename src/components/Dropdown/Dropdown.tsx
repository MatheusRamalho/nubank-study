import { Link } from "react-router-dom";

import { DropdownItemWrapper, DropdownMenuWrapper } from "./Dropdown.styled";
import { DropdownItemProps, DropdownProps } from "./Dropdown.types";

{/* --------------------------------------------------------------------------
| DROPDOWN MENU...
|-------------------------------------------------------------------------- */}
export const DropdownMenu = ({ children }: DropdownProps) => {
    const handleDropdownClosed = (event: any) => {
        let item = event.currentTarget;
        item.classList.remove('dropdown-menu--active');
    }

    return (
        <DropdownMenuWrapper
            className="dropdown-menu"
            onMouseLeave={(event) => handleDropdownClosed(event)}
        >
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
