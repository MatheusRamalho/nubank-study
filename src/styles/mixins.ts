import { css } from "styled-components";

export type typefaceProps = {
    size: string;
    device: string;
}

export type responsiveProps = {
    device: string;
}

// Mixins de responsividade de títulos...
export const handleTypefaceTitle = ({ size, device = 'desktop' }: typefaceProps) => css`
    font-family: ${props => props.theme.fonts.title};

    // H1...
    ${ (size == 'h1' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size64};
            line-height: 100%;
        `
        : (size == 'h1' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size36};
            line-height: 120%;
        `
    }

    // H2...
    ${ (size == 'h2' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size52};
            line-height: 110%;
        `
        : (size == 'h2' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size36};
            line-height: 120%;
        `
    }

    // H3...
    ${ (size == 'h3' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size36};
            line-height: 120%;
        `
        : (size == 'h3' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size24};
            line-height: 120%;
        `
    }

    // H4...
    ${ (size == 'h4' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size24};
            line-height: 130%;
        `
        : (size == 'h4' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size18};
            line-height: 130%;
        `
    }

    // H5...
    ${ (size == 'h5' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size18};
            line-height: 140%;
        `
        : (size == 'h5' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size16};
            line-height: 150%;
        `
    }
`;

// Mixin de responsividade de textos...
export const handleTypefaceText = ({ size = 'text-2', device = 'desktop' }: typefaceProps) => css`
    font-family: ${props => props.theme.fonts.text};

    // Text-1...
    ${ (size == 'text-1' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size24};
            line-height: 130%;
        `
        : (size == 'text-1' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size18};
            line-height: 130%;
        `
    }

    // Text-2...
    ${ (size == 'text-2' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size16};
            line-height: 140%;
        `
        : (size == 'text-2' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size14};
            line-height: 150%;
        `
    }

    // Text-3...
    ${ (size == 'text-3' && device == 'desktop')
        ? css`
            font-size: ${props => props.theme.sizes.size14};
            line-height: 150%;
        `
        : (size == 'text-3' && device == 'mobile') && css`
            font-size: ${props => props.theme.sizes.size14};
            line-height: 150%;
        `
    }
`;

// Mixin de responsividade...
export const handleResponsive = ({ device }: responsiveProps) => css`
    ${ (device == 'xl')
        ? css` // For resolutions upper 1440px
            @media screen and (min-width: ${props => props.theme.containers.extraLarge}) {
                @content;
                background: green;
            }
        `
        : (device == 'l')
            ? css` // For resolutions between 1140px and 1440px
                @media screen and (max-width: ${props => props.theme.containers.extraLarge}) and (min-width: ${props => props.theme.containers.large}) {
                    @content;
                    background: yellow;
                }
            `
            : (device == 'm')
                ? css` // For resolutions between 960px and 1140px
                    @media screen and (max-width: ${props => props.theme.containers.large}) and (min-width: ${props => props.theme.containers.small}) {
                        @content;
                        background: blue;
                    }
                `
                : (device == 's')
                    ? css` // For resolutions less than 960px
                        @media screen and (max-width: ${props => props.theme.containers.medium}) {
                            @content;
                            background: red;
                        }
                    `
                    : (device == 'xs') && css` // For resolutions less than 540px
                        @media screen and (max-width: ${props => props.theme.containers.small}) {
                            @content;
                            background: pink;
                        }
                    `
    }
`;
