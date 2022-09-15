import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        fonts: {
            title: string;
            text: string;
            light: string;
            regular: string;
            medium: string;
            semiBold: string;
        };

        colors: {
            primaryNormal: string;
            primaryLight: string;
            primaryDark: string;

            secondaryNormal: string;
            secondaryLight: string;
            secondaryDark: string;

            gradient: string;

            whiteNormal: string;
            whiteLight: string;
            whiteDark: string;

            blackNormal: string;
            blackLight: string;
            blackDark: string;

            gray50: string;
            gray100: string;
            gray200: string;
            gray300: string;
            gray400: string;
            gray500: string;
            gray600: string;
        };

        sizes: {
            size1: string;
            size2: string;
            size3: string;
            size4: string;
            size6: string;
            size8: string;
            size12: string;
            size14: string;
            size16: string;
            size18: string;
            size24: string;
            size32: string;
            size36: string;
            size40: string;
            size48: string;
            size52: string;
            size56: string;
            size64: string;
            size72: string;
            size80: string;
            size88: string;
            size96: string;
            size104: string;
            size112: string;
            size120: string;
            size128: string;
            size136: string;
            size144: string;
            size152: string;
            size160: string;
            size168: string;
            size176: string;
            size184: string;
            size192: string;
            size200: string;
        };

        containers: {
            extraLarge: string;
            large: string;
            medium: string;
            small: string;
        };
    }

    export interface CustomTheme {
        title: string;
    }
}