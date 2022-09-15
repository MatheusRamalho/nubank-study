import { createGlobalStyle } from "styled-components";
import { handleResponsive, handleTypefaceText, handleTypefaceTitle } from "./mixins";

export default createGlobalStyle`
    /* --------------------------------------------------------------------------
    | CSS RESET...
    |-------------------------------------------------------------------------- */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* --------------------------------------------------------------------------
    | PAGE...
    |-------------------------------------------------------------------------- */
    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: ${props => props.theme.colors.whiteLight};

        font-family: ${props => props.theme.fonts.text};
        font-weight: ${props => props.theme.fonts.regular};
        color: ${props => props.theme.colors.gray600};

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: ${props => props.theme.sizes.size8};
            padding-right: ${props => props.theme.sizes.size2};
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${props => props.theme.sizes.size8};
            background: ${props => props.theme.colors.whiteDark};
        }
    }

    /* --------------------------------------------------------------------------
    | ELEMENTS...
    |-------------------------------------------------------------------------- */
    ul, ol {
        list-style-type: none;
    }

    img, picture, video, canvas, svg {
        display: block;
        width: 100%;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6,
    p, span, small, address {
        overflow-wrap: break-word; // Para que o texto quebre...
        hyphens: auto; // Adiciona hífen...
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.blackNormal};
    }

    .container {
        max-width: ${props => props.theme.containers.extraLarge};
        margin: 0 auto;
        padding: 0 0.938rem;

        height: 500px;
        ${handleResponsive({ device: 'xl' })};
        ${handleResponsive({ device: 'l' })};
        ${handleResponsive({ device: 'm' })};
        ${handleResponsive({ device: 's' })};
        ${handleResponsive({ device: 'xs' })};
    }

    /* --------------------------------------------------------------------------
    | TYPOGRAPHYS...
    |-------------------------------------------------------------------------- */

    h1 {
        ${handleTypefaceTitle({ size: 'h1', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h1', device: 'mobile' })};
        }
    }

    h2 {
        ${handleTypefaceTitle({ size: 'h2', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h2', device: 'mobile' })};
        }
    }

    h3 {
        ${handleTypefaceTitle({ size: 'h3', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h3', device: 'mobile' })};
        }
    }

    h4 {
        ${handleTypefaceTitle({ size: 'h4', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h4', device: 'mobile' })};
        }
    }

    h5 {
        font-weight: ${props => props.theme.fonts.semiBold};
        text-transform: uppercase;

        // Deixar background gradient na letra...
        background: ${props => props.theme.colors.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        ${handleTypefaceTitle({ size: 'h5', device: 'desktop' })};
        @include handleResponsive(s) {
            ${handleTypefaceTitle({ size: 'h5', device: 'mobile' })};
        }
    }

    p {
        color: ${props => props.theme.colors.gray300};

        ${handleTypefaceText({ size: 'text-2', device: 'desktop' })};

        @include handleResponsive(s) {
            ${handleTypefaceText({ size: 'text-2', device: 'mobile' })};
        }
    }

    .text-1 {}
    .text-2 {}
    .text-3 {}
`;