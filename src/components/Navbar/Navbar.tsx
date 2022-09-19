import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';

import { NavbarWrapper, NavbarDesktopWrapper, NavbarMobileWrapper, NavbarMobileMenuWrapper, NavItemWrapper, NavbarItemMobileWrapper } from "./Navbar.styled";
import { NavbarProps, NavItemProps } from "./Navbar.types";

// COMPONENTS...
import { LinkButton } from "../LinkButton";

// IMGS/SVGS...
import brandSvg from '../../assets/svgs/brand/brand.svg';

{/* --------------------------------------------------------------------------
| NAVBAR HEADER...
|-------------------------------------------------------------------------- */}
export const Navbar = ({ children, isActive = false }: NavbarProps) => {
    // Função que faz o efeito do scroll no header...
    const handleScrollHeader = () => {
        const header = document.querySelector('#header');

        if (header) {
            (window.scrollY >= 50)
                ? header.classList.add('header--active')
                : header.classList.remove('header--active');
        }
    }
    window.addEventListener('scroll', handleScrollHeader);

    return (
        <NavbarWrapper
            id="header"
            className={`header ${isActive ? 'header--active' : ''}`}
        >
            {children}
        </NavbarWrapper>
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
                    <ReactSVG
                        src={brandSvg} role="img" aria-label="Nubank logo marca"
                        beforeInjection={ (svg) => {
                            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
                            title.innerHTML = 'Nubank';
                            desc.innerHTML = 'Logo marca da Nubank';
                            svg.prepend(title);
                            svg.prepend(desc);
                        }}
                    />
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

    // Função que abre/fecha o menu mobile...
    const handleMenuToggle = () => {
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
                onClick={handleMenuToggle}
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
    // Função que abre/fecha o dropdown...
    const handleDropdownToggle = (event: any) => {
        event.preventDefault();

        let link = event.currentTarget;
        let item = link ? link.closest('li.nav-item') : null;
        let dropdown = item ? item.querySelector('ul.dropdown-menu') : null;
        let dropdowns = document.querySelectorAll('ul.dropdown-menu');

        dropdowns.forEach(element => {
            (dropdown) &&
                (element === dropdown)
                ? dropdown.classList.toggle('dropdown-menu--active')
                : element.classList.remove('dropdown-menu--active');
        });
    }

    return (
        <NavItemWrapper className="nav-item">
            <a
                className="nav-item-link" href="#"
                onClick={(event) => handleDropdownToggle(event)}
            >
                {name}
            </a>

            {children}
        </NavItemWrapper>
    );
}

{/* --------------------------------------------------------------------------
| NAVBAR ITEM MOBILE...
|-------------------------------------------------------------------------- */}
export const NavItemMobile = ({ name, link, isVariation = false, children, classe }: NavItemProps) => {
    return (
        <NavbarItemMobileWrapper className={`nav-item-mobile ${classe}`}>
            { isVariation
                ? <> {children} </>
                : <Link
                    className="nav-item-mobile-link"
                    to={link ? link : '#'}
                >
                    {name}
                </Link>
            }
        </NavbarItemMobileWrapper>
    );
}