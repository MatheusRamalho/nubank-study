import styled from "styled-components";
import { handleResponsive, handleTypefaceTitle } from "../../styles/mixins";

/* --------------------------------------------------------------------------
| NAVBAR HEADER...
|-------------------------------------------------------------------------- */
export const HeaderWrapper = styled.header`
    position: fixed;
    z-index: 999;

    width: 100%;
    height: 4.5rem;
    background-color: transparent;
    box-shadow: none;
    transition: .5s ease;

    &.header--active {
        background-color: ${props => props.theme.colors.whiteDark};
        box-shadow: ${props => props.theme.shadows.purple3};
    }
`;

/* --------------------------------------------------------------------------
| NAVBAR DESKTOP...
|-------------------------------------------------------------------------- */
export const NavbarDesktopWrapper = styled.nav`
    max-width: ${props => props.theme.containers.extraLarge};
    margin: 0 auto;
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size24};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @include handleResponsive(s) {
        display: none;
    }

    .navbar-desktop__item {
        flex: 1 1 auto;
        display: flex;
        align-items: center;

        &--1 {
            justify-content: flex-start;

            .nav-brand {
                width: ${props => props.theme.sizes.size48};
                height: ${props => props.theme.sizes.size48};

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .nav-menu {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }

        &--2 {
            justify-content: flex-end;

            a:last-child:not(.button) {
                margin-left: ${props => props.theme.sizes.size16};
            }
        }
    }
`;

/* --------------------------------------------------------------------------
| NAVBAR ITEM...
|-------------------------------------------------------------------------- */
export const NavItemWrapper = styled.li`
    position: relative;
    margin-left: ${props => props.theme.sizes.size16};

    .nav-item-link {
        position: relative;

        display: inline-block;
        padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size16};

        &::after {
            content: '';
            position: absolute;
            top: 42%;
            right: -4px;

            width: ${props => props.theme.sizes.size8};
            height: ${props => props.theme.sizes.size8};
            border-right: ${props => props.theme.sizes.size2} solid ${props => props.theme.colors.primaryNormal};
            border-bottom: ${props => props.theme.sizes.size2} solid ${props => props.theme.colors.primaryNormal};
            border-radius: ${props => props.theme.sizes.size1};
            transform: rotate(45deg);
            transition: .2s linear;
        }

        &:hover {
            &::after {
                top: 45%;
            }
        }
    }
`;

/* --------------------------------------------------------------------------
| NAVBAR MOBILE...
|-------------------------------------------------------------------------- */
export const NavbarMobileWrapper = styled.nav`
    max-width: ${props => props.theme.containers.extraLarge};
    margin: 0 auto;
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size24};

    display: none;
    justify-content: space-between;
    align-items: center;

    @include handleResponsive(s) {
        display: flex;
    }

    .nav-hamburguer {
        z-index: 998;
        position: relative;

        cursor: pointer;
        width: ${props => props.theme.sizes.size36};
        height: ${props => props.theme.sizes.size36};
        transition: .7s ease;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 30%;
            left: 16%;

            width: 70%;
            height: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.primaryNormal};
            transition: .8s ease;
        }

        &::after {
            top: 60%;
        }

        &--active {
            &::before {
                top: 50%;
                transform: rotate(-135deg);
            }

            &::after {
                top: 50%;
                transform: rotate(315deg);
            }
        }
    }

    .nav-brand {
        width: ${props => props.theme.sizes.size48};
        height: ${props => props.theme.sizes.size48};

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

/* --------------------------------------------------------------------------
| NAVBAR MENU MOBILE...
|-------------------------------------------------------------------------- */
export const NavbarMobileMenuWrapper = styled.nav`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.whiteNormal};
    /* transform: translate3d(0, -73px, 0); */
    transition: 1s ease;

    display: none;
    justify-content: center;
    align-items: center;

    @include handleResponsive(s) {
        display: flex;
    }

    opacity: 0;
    pointer-events: none;

    &.navbar-mobile-menu--active {
        opacity: 1;
        pointer-events: all;
    }

    .navbar-mobile-menu__list {
        max-width: ${props => props.theme.containers.extraLarge};

        display: flex;
        flex-direction: column;

        svg {
            width: ${props => props.theme.sizes.size36};
            height: ${props => props.theme.sizes.size36};

            path {
                transition: .7s ease;
            }

            &:hover {
                path {
                    stroke: ${props => props.theme.colors.primaryNormal};
                }
            }
        }
    }
`;

/* --------------------------------------------------------------------------
| NAVBAR ITEM MOBILE...
|-------------------------------------------------------------------------- */
export const NavbarItemMobileWrapper = styled.li`
    .nav-item-mobile-link {
        position: relative;
        display: inline-block;

        padding: ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size24};
        color: ${props => props.theme.colors.gray200};
        ${handleTypefaceTitle({ size: 'h3', device: 'desktop' })};

        &::after {
            content: '';
            position: absolute;
            top: 90%;
            left: 16px;
            transition: 1s ease;

            width: 0%;
            height: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.secondaryNormal};
        }

        &:hover {
            color: ${props => props.theme.colors.primaryNormal};

            &::after {
                width: 100%;
            }
        }
    }
`;