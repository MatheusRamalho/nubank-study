import styled from "styled-components";

/* --------------------------------------------------------------------------
| DROPDOWN MENU...
|-------------------------------------------------------------------------- */
export const DropdownMenuWrapper = styled.ul`
    position: absolute;
    top: 48px;
    left: 24px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    padding: ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size24};
    background-color: ${props => props.theme.colors.whiteLight};
    border-radius: ${props => props.theme.sizes.size16};
    box-shadow: ${props => props.theme.shadows.purple3};
    opacity: 0;
    pointer-events: none; // Desaparece os links...
    transition: .7s ease;

    &.dropdown-menu--active {
        opacity: 1;
        pointer-events: all;
    }
`;

/* --------------------------------------------------------------------------
| DROPDOWN ITEM...
|-------------------------------------------------------------------------- */
export const DropdownItemWrapper = styled.li`
    width: 100%;

    .dropdown-link {
        position: relative;
        display: inline-block;

        width: 100%;
        padding: ${props => props.theme.sizes.size8} ${props => props.theme.sizes.size16};

        &::after {
            content: '';
            position: absolute;
            top: 90%;
            left: 0;
            transition: .5s ease;

            width: 0%;
            height: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.secondaryNormal};
        }

        &:hover {
            &::after {
                width: 100%;
            }
        }
    }
`;