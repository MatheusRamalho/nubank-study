import { Link } from "react-router-dom";

import { NavbarProps, NavItemProps } from "./Navbar.types";
import {
    HeaderWrapper,
    NavbarDesktopWrapper, NavbarMobileWrapper, NavbarMobileMenuWrapper,
    NavItemWrapper, NavbarItemMobileWrapper,
} from "./Navbar.styled";

import { LinkButton } from "../Button/Button";
import brandSvg from '../../assets/svgs/brand.svg';
import { useState } from "react";

{/* --------------------------------------------------------------------------
| NAVBAR HEADER...
|-------------------------------------------------------------------------- */}
export const Navbar = ({ children, isActive = false }: NavbarProps) => {
    // const handleScrollHeader = () => {
    //     const header = document.querySelector('#header');

    //     if (header) {
    //         (this.scrollY >= 50)
    //             ? header.classList.add('header-active')
    //             : header.classList.remove('header-active');
    //     }
    // }
    // window.addEventListener('scroll', handleScrollHeader);

    return (
        <HeaderWrapper
            id="header"
            className={`header ${isActive ? 'header--active' : ''}`}
        >
            {children}
        </HeaderWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR DESKTOP...
|-------------------------------------------------------------------------- */}
export const NavbarDesktop = ({ children }: NavbarProps) => {
    return (
        <NavbarDesktopWrapper className="navbar-desktop">
            <div className="navbar-desktop__item navbar-desktop__item--1">
                <div className="nav-brand">
                    <img src={brandSvg} alt="" title="Nubank" />
                </div>

                <ul className="nav-menu">
                    {children}
                </ul>
            </div>

            <div className="navbar-desktop__item navbar-desktop__item--2">
                <LinkButton link="#" name="Quero ser Nubank" />
                <Link to="#"> Login </Link>
            </div>
        </NavbarDesktopWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR MOBILE...
|-------------------------------------------------------------------------- */}
export const NavbarMobile = () => {
    const [isActive, setIsActive] = useState(false);

    // Função que abre ou fecha o menu mobile...
    const handleToggleMenu = () => {
        let menu = document.querySelector('.navbar-mobile-menu');

        if (isActive === true) {
           setIsActive(false);
           (menu) && menu.classList.remove('navbar-mobile-menu--active');
        } else {
           setIsActive(true);
           (menu) && menu.classList.add('navbar-mobile-menu--active');
        }
    }

    return (
        <NavbarMobileWrapper className="navbar-mobile">
            <div
                onClick={handleToggleMenu}
                className={`nav-hamburguer ${isActive ? 'nav-hamburguer--active' : ''}`}
            ></div>

            <div className="nav-brand">
                <img src={brandSvg} alt="" title="Nubank" />
            </div>

            <Link to="#"> Login </Link>
        </NavbarMobileWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR MENU MOBILE...
|-------------------------------------------------------------------------- */}
export const NavbarMobileMenu = ({ children }: NavbarProps) => {
    return (
        <NavbarMobileMenuWrapper className="navbar-mobile-menu">
            <ul className="navbar-mobile-menu__list">
                {children}
            </ul>
        </NavbarMobileMenuWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR ITEM...
|-------------------------------------------------------------------------- */}
export const NavItem = ({ name, children }: NavItemProps) => {
    return (
        <NavItemWrapper className="nav-item">
            <a className="nav-item-link" href="#"> {name} </a>

            {children}
        </NavItemWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR ITEM MOBILE...
|-------------------------------------------------------------------------- */}
export const NavItemMobile = ({ name, link }: NavItemProps) => {
    return (
        <NavbarItemMobileWrapper className="nav-item-mobile">
            <Link
                className="nav-item-mobile-link"
                to={link ? link : '#'}
            >
                {name}
            </Link>
        </NavbarItemMobileWrapper>
    );
}