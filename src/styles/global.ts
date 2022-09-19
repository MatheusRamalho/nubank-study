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
        height: 2000px;
        background-color: ${props => props.theme.colors.whiteDark};

        font-family: ${props => props.theme.fonts.text};
        font-weight: ${props => props.theme.fonts.regular};
        color: ${props => props.theme.colors.gray600};

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: ${props => props.theme.sizes.size12};
            padding-right: ${props => props.theme.sizes.size4};
            background: ${props => props.theme.colors.whiteLight};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${props => props.theme.sizes.size2};
            background: ${props => props.theme.colors.secondaryLight};
        }
    }

    /* --------------------------------------------------------------------------
    | LISTS...
    |-------------------------------------------------------------------------- */
    ul, ol {
        list-style-type: none;
    }

    /* --------------------------------------------------------------------------
    | FILES...
    |-------------------------------------------------------------------------- */
    img, picture, video, canvas, svg {
        display: block;
        width: 100%;
    }

    /* --------------------------------------------------------------------------
    | LINKS...
    |-------------------------------------------------------------------------- */
    a {
        ${handleTypefaceText({ size: 'text-3', device: 'desktop' })};

        color: ${props => props.theme.colors.blackNormal};
        text-decoration: none;
        outline: none;
        transition: .5s ease;

        &:not(disabled):hover {
            opacity: 0.9;
        }
    }

    /* --------------------------------------------------------------------------
    | TYPOGRAPHYS...
    |-------------------------------------------------------------------------- */
    h1, h2, h3, h4, h5, h6,
    p, span, small, address {
        overflow-wrap: break-word; // Para que o texto quebre...
        hyphens: auto; // Adiciona hífen...
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.blackNormal};
    }

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

    /* --------------------------------------------------------------------------
    | CONTAINERS...
    |-------------------------------------------------------------------------- */
    .container {
        max-width: ${props => props.theme.containers.extraLarge};
        overflow: hidden;
        margin: 0 auto;
        /* padding: 0 0.938rem; */
        padding: ${props => props.theme.sizes.size96} ${props => props.theme.sizes.size24};

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        @include handleResponsive(s) {
            padding: ${props => props.theme.sizes.size32} ${props => props.theme.sizes.size18};
            flex-direction: column;
        }
    }

    /* --------------------------------------------------------------------------
    | FLEXBOX...
    |-------------------------------------------------------------------------- */
    .flex {
        display: flex;
        align-items: center;
        justify-content: normal;

        &--start {
            justify-content: flex-start;
        }

        &--center {
            justify-content: center;
        }

        &--end {
            justify-content: flex-end;
        }

        &--column {
            flex-direction: column;
        }

        &--row {
            flex-direction: row;
        }

        &--wrap {
            flex-wrap: wrap;
        }

        &--start-a {
            align-items: flex-start;
        }

        &--end-a {
            align-items: flex-end;
        }
    }

    /*
        Propriedade flex, é um atalho para as propriedades:
        - flex-grow (Capacidade do item crescer)...
        - flex-shrink (Capacidade de redução do item)...
        - flex-basis (Tamanho inicial do item)...
    */
    .flex-item {
        flex: 0 1 22.5rem;

        &--1 {
            flex-grow: 1;
        }

        &--2 {
            flex-grow: 2;
        }

        &--3 {
            flex-grow: 3;
        }

        &--4 {
            flex-grow: 4;
        }

        &--5 {
            flex-grow: 5;
        }

        &--auto {
            flex: 2 1 auto;
        }
    }

    /* --------------------------------------------------------------------------
    | WIDTHS...
    |-------------------------------------------------------------------------- */
    .w {
        &.w-auto {
            width: auto;
        }

        &.w-100 {
            width: 100%;
        }

        &.w-75 {
            width: 75%;
        }

        &.w-50 {
            width: 50%;
        }

        &.w-25 {
            width: 25%;
        }
    }

    /* --------------------------------------------------------------------------
    | MARGIN...
    |-------------------------------------------------------------------------- */
    .m {
        &--0 {
            margin: 0;
        }

        &--1 {
            margin: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin: ${props => props.theme.sizes.size128};
        }
    }

    .mt {
        &--0 {
            margin-top: 0;
        }

        &--1 {
            margin-top: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-top: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-top: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-top: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-top: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-top: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-top: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-top: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-top: ${props => props.theme.sizes.size128};
        }
    }

    .mr {
        &--0 {
            margin-right: 0;
        }

        &--1 {
            margin-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-right: ${props => props.theme.sizes.size128};
        }
    }

    .mb {
        &--0 {
            margin-bottom: 0;
        }

        &--1 {
            margin-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-bottom: ${props => props.theme.sizes.size128};
        }
    }

    .ml {
        &--0 {
            margin-left: 0;
        }

        &--1 {
            margin-left: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-left: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-left: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-left: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-left: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-left: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-left: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-left: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-left: ${props => props.theme.sizes.size128};
        }
    }

    .mx {
        &--0 {
            margin-left: 0;
            margin-right: 0;
        }

        &--1 {
            margin-left: ${props => props.theme.sizes.size8};
            margin-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-left: ${props => props.theme.sizes.size16};
            margin-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
        margin-left: ${props => props.theme.sizes.size24};
            margin-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-left: ${props => props.theme.sizes.size32};
            margin-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-left: ${props => props.theme.sizes.size48};
            margin-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-left: ${props => props.theme.sizes.size64};
            margin-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
        margin-left: ${props => props.theme.sizes.size72};
            margin-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-left: ${props => props.theme.sizes.size96};
            margin-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-left: ${props => props.theme.sizes.size128};
            margin-right: ${props => props.theme.sizes.size128};
        }
    }

    .my {
        &--0 {
            margin-top: 0;
            margin-bottom: 0;
        }

        &--1 {
            margin-top: ${props => props.theme.sizes.size8};
            margin-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            margin-top: ${props => props.theme.sizes.size16};
            margin-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            margin-top: ${props => props.theme.sizes.size24};
            margin-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            margin-top: ${props => props.theme.sizes.size32};
            margin-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            margin-top: ${props => props.theme.sizes.size48};
            margin-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            margin-top: ${props => props.theme.sizes.size64};
            margin-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            margin-top: ${props => props.theme.sizes.size72};
            margin-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            margin-top: ${props => props.theme.sizes.size96};
            margin-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            margin-top: ${props => props.theme.sizes.size128};
            margin-bottom: ${props => props.theme.sizes.size128};
        }
    }

    /* --------------------------------------------------------------------------
    | PADDING...
    |-------------------------------------------------------------------------- */
    .p {
        &--0 {
            padding: 0;
        }

        &--1 {
            padding: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding: ${props => props.theme.sizes.size128};
        }
    }

    .pt {
        &--0 {
            padding-top: 0;
        }

        &--1 {
            padding-top: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-top: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-top: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-top: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-top: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-top: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-top: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-top: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-top: ${props => props.theme.sizes.size128};
        }
    }

    .pr {
        &--0 {
            padding-right: 0;
        }

        &--1 {
            padding-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-right: ${props => props.theme.sizes.size128};
        }
    }

    .pb {
        &--0 {
            padding-bottom: 0;
        }

        &--1 {
            padding-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-bottom: ${props => props.theme.sizes.size128};
        }
    }

    .pl {
        &--0 {
            padding-left: 0;
        }

        &--1 {
            padding-left: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-left: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-left: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-left: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-left: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-left: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-left: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-left: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-left: ${props => props.theme.sizes.size128};
        }
    }

    .px {
        &--0 {
            padding-left: 0;
            padding-right: 0;
        }

        &--1 {
            padding-left: ${props => props.theme.sizes.size8};
            padding-right: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-left: ${props => props.theme.sizes.size16};
            padding-right: ${props => props.theme.sizes.size16};
        }

        &--3 {
        padding-left: ${props => props.theme.sizes.size24};
            padding-right: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-left: ${props => props.theme.sizes.size32};
            padding-right: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-left: ${props => props.theme.sizes.size48};
            padding-right: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-left: ${props => props.theme.sizes.size64};
            padding-right: ${props => props.theme.sizes.size64};
        }

        &--7 {
        padding-left: ${props => props.theme.sizes.size72};
            padding-right: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-left: ${props => props.theme.sizes.size96};
            padding-right: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-left: ${props => props.theme.sizes.size128};
            padding-right: ${props => props.theme.sizes.size128};
        }
    }

    .py {
        &--0 {
            padding-top: 0;
            padding-bottom: 0;
        }

        &--1 {
            padding-top: ${props => props.theme.sizes.size8};
            padding-bottom: ${props => props.theme.sizes.size8};
        }

        &--2 {
            padding-top: ${props => props.theme.sizes.size16};
            padding-bottom: ${props => props.theme.sizes.size16};
        }

        &--3 {
            padding-top: ${props => props.theme.sizes.size24};
            padding-bottom: ${props => props.theme.sizes.size24};
        }

        &--4 {
            padding-top: ${props => props.theme.sizes.size32};
            padding-bottom: ${props => props.theme.sizes.size32};
        }

        &--5 {
            padding-top: ${props => props.theme.sizes.size48};
            padding-bottom: ${props => props.theme.sizes.size48};
        }

        &--6 {
            padding-top: ${props => props.theme.sizes.size64};
            padding-bottom: ${props => props.theme.sizes.size64};
        }

        &--7 {
            padding-top: ${props => props.theme.sizes.size72};
            padding-bottom: ${props => props.theme.sizes.size72};
        }

        &--8 {
            padding-top: ${props => props.theme.sizes.size96};
            padding-bottom: ${props => props.theme.sizes.size96};
        }

        &--9 {
            padding-top: ${props => props.theme.sizes.size128};
            padding-bottom: ${props => props.theme.sizes.size128};
        }
    }

    /* --------------------------------------------------------------------------
    | ANIMATES...
    |-------------------------------------------------------------------------- */
    @keyframes flip-card {
        0% {
            transform: rotateX(-10deg) rotateY(10deg) rotate(-15deg);
        }

        40% {
            transform: rotateX(0deg) rotateY(20deg);
        }

        60% {
            transform: rotateX(180deg) rotateY(20deg);
        }

        100% {
            transform: rotateX(190deg) rotateY(10deg) rotate(15deg);
        }
    }

    @keyframes change-card {
        0%, 49% {
            background-image: url("../src/assets/svgs/card/card-front.svg");
            background-size: cover;
        }

        50%, 100% {
            background-image: url("../src/assets/svgs/card/card-back-inverted.svg");
            background-size: cover;
        }
    }

    @keyframes icon-move {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(10px, -40px, 0);
        }
    }

    @keyframes bg-move {
        0% {
            transform: translate3d(0,0,0);
        }
        100% {
            transform: translate3d(0,30px,0);
        }
    }

    @keyframes opacity-img {
        0% {
            opacity: 0;
        }

        20%, 50% {
            opacity: 1;
        }

        70%, 100% {
            opacity: 0;
        }
    }

    @keyframes opacity-screen1 {
        0%, 15% {
            opacity: 1;
        }

        20%, 100% {
            opacity: 0;
        }
    }

    @keyframes opacity-screen2 {
        0%, 15% {
            opacity: 0;
        }

        20%, 35% {
            opacity: 1;
        }

        40%, 100% {
            opacity: 0;
        }
    }

    @keyframes opacity-screen3 {
        0%, 35% {
            opacity: 0;
        }

        40%, 55% {
            opacity: 1;
        }

        60%, 100% {
            opacity: 0;
        }
    }

    @keyframes opacity-screen4 {
        0%, 55% {
            opacity: 0;
        }

        60%, 75% {
            opacity: 1;
        }

        80%, 100% {
            opacity: 0;
        }
    }

    @keyframes opacity-screen5 {
        0%, 75% {
            opacity: 0;
        }

        80%, 100% {
            opacity: 1;
        }
    }

    @keyframes opacity-shadow {
        0% {
            fill-opacity: 0.15;
        }

        100% {
            fill-opacity: 0.4;
        }
    }

    @keyframes move-and-rotate {
        0% {
            transform: translate3d(0,-40px,0) rotate(0deg);
        }

        100% {
            transform: translate3d(0,20px,0) rotate(5deg);
        }
    }

    @keyframes move-line-letter {
        0% {
            stroke-width: 0;
            stroke-dasharray: 0 400;
            stroke-opacity: 0;
        }

        60%, 100% {
            stroke-width: 4;
            stroke-dasharray: 400 0;
            stroke-opacity: 1;
        }
    }

    /* --------------------------------------------------------------------------
    | TESTES...
    |-------------------------------------------------------------------------- */
    .border {
        border: ${props => props.theme.sizes.size4} dashed red;
    }


    /* --------------------------------------------------------------------------
    | SECTIONS - BACKGROUNDS HERO AND INVITE...
    |-------------------------------------------------------------------------- */
    .hero-bg,
    .invite-bg {
        z-index: -1;
        position: absolute;

        width: 100%;
        height: 100%;
        overflow: hidden;

        .svg-bg-hero svg,
        .svg-bg-invite svg {
            width: 100%;

            @include handleResponsive(xl) {
                width: 100%;
            }

            .bg-blur1 {
                transform: translate3d(0, -100px, 0);
            }

            .bg-blur2 {
                transform: translate3d(0, -150px, 0);
            }

            .bg-rect1,
            .bg-rect2,
            .bg-rect3,
            .bg-rect4 {
                animation: bg-move 3s ease infinite alternate;
            }

            .bg-rect1 {
                animation-delay: 0s;
            }

            .bg-rect2 {
                animation-delay: 0.5s;
            }

            .bg-rect3 {
                animation-delay: 1s;
            }

            .bg-rect4 {
                animation-delay: 1.5s;
            }
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION HERO...
    |-------------------------------------------------------------------------- */
    #sect-hero.hero-sect {
        height: 90vh;

        @include handleResponsive(s) {
            height: auto;
        }

        .hero-card {
            perspective: 500px;
            position: relative;

            .icon-card-hero,
            .icon-contactless-hero,
            .icon-mobile-hero {
                z-index: 2;
                position: absolute;

                animation: icon-move 7s ease infinite alternate;

                svg { // Aplicar sombra direto no svg (diferente de um box-shadow)
                    filter: drop-shadow(0px 16px 24px rgba(169, 80, 196, 0.25));
                }
            }

            .icon-card-hero {
                top: -10px;

                animation-delay: 0.5s;
            }

            .icon-contactless-hero {
                top: 350px;

                animation-delay: 1s;
            }

            .icon-mobile-hero {
                top: 150px;
                left: 140px;

                animation-delay: 2.5s;

                @include handleResponsive(s) {
                    top: 350px;
                    left: -100px;
                }
            }

            .card {
                z-index: -1;
                width: 340px;
                height: calc(0.64 * 340px);
                border-radius: ${props => props.theme.sizes.size12};
                box-shadow: ${props => props.theme.shadows.purple4};

                transform-origin: center center;
                transform-style: preserve-3d;
                animation: flip-card 12s linear infinite alternate,
                    change-card 12s linear 0s infinite alternate;
            }
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION PEOPLE...
    |-------------------------------------------------------------------------- */
    #sect-people.people {
        .people1, .people2, .people3, .people4, .people5, .people6 {
            opacity: 0;
            animation: opacity-img 10s ease 0s infinite;
        }

        .people2 {
            animation-delay: 5s;
        }

        .people3 {
            animation-delay: 2s;
        }

        .people4 {
            animation-delay: 7s;
        }

        .people5 {
            animation-delay: 3s;
        }

        .people6 {
            animation-delay: 8s;
        }

        #people2 { // Removendo uma imagem no mobile...
            @include handleResponsive(s) {
                display: none;
            }
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION THE BEST...
    |-------------------------------------------------------------------------- */
    #sect-the-best.the-best {
        .best {
            position: relative;

            background-color: ${props => props.theme.colors.whiteNormal};
            border-radius: ${props => props.theme.sizes.size48};

            display: flex;
            align-items: center;
            justify-content: center;

            @include handleResponsive(s) {
                flex-direction: column;
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);

                width: ${props => props.theme.sizes.size128};
                height: ${props => props.theme.sizes.size32};
                background-image: url('../src/assets/svgs/icon/icon-entail.svg');
                background-repeat: no-repeat;
            }

            .best-item {
                div,
                div > div,
                div > div > svg {
                    width: auto;
                }

                svg {
                    filter: drop-shadow(0px 16px 24px rgba(169, 80, 196, 0.25));
                    transition: .5s ease;

                    &:hover {
                        transform: scale(1.05);
                    }
                }

                p {
                    font-weight: bold;
                    text-align: center;
                    color: ${props => props.theme.colors.blackLight};
                }
            }
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION DIGITAL ACCOUNT...
    |-------------------------------------------------------------------------- */
    #sect-digital-account.digital-account {
        .account-svg {
            width: 75%;
        }

        .account-icon1,
        .account-icon2,
        .account-icon3 {
            animation: icon-move 3s ease 2.5s infinite alternate;
        }

        .account-screen1 {
            animation: opacity-screen1 18s ease infinite alternate;
        }
        .account-screen2 {
            animation: opacity-screen2 18s ease infinite alternate;
        }
        .account-screen3 {
            animation: opacity-screen3 18s ease infinite alternate;
        }
        .account-screen4 {
            animation: opacity-screen4 18s ease infinite alternate;
        }
        .account-screen5 {
            animation: opacity-screen5 18s ease infinite alternate;
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION CREDIT CARD...
    |-------------------------------------------------------------------------- */
    #sect-credit-card.credit-card {
        .card-svg {
            width: 85%;
        }

        .card-double-front,
        .card-double-back {
            transform-origin: center center;
            transform-box: fill-box;
            transform: translate3d(0,-40px,0);
            animation: move-and-rotate 3s ease infinite alternate;
        }

        .card-double-front {
            animation-delay: 1s;
        }

        .card-double-shadow {
            transform-origin: center center;
            transform-box: fill-box;
            fill-opacity: 0.15;
            animation: opacity-shadow 3s ease 1s infinite alternate;
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION APP DOWNLOAD...
    |-------------------------------------------------------------------------- */
    #sect-app-download.app-download {
        .brand-download-svg {
            width: 80%;
        }

        .brand-full-letter-u,
        .brand-full-letter-n {
            animation: move-line-letter 4s ease infinite alternate;
        }
    }

    /* --------------------------------------------------------------------------
    | SECTIONS - SECTION HERO DOWN...
    |-------------------------------------------------------------------------- */
    #sect-invite.invite {
        height: 90vh;

        @include handleResponsive(s) {
            height: auto;
        }

        .invite-content {
            max-width: 700px;
            text-align: center;
        }
    }
`;