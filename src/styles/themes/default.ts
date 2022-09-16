import { DefaultTheme, CustomTheme } from 'styled-components';

import { lightTheme } from './light';
import { darkTheme } from './dark';

const defaultTheme = {
    fonts: {
        title: "'Sora', sans-serif",
        text: "'Source Sans Pro', sans-serif",
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
    },

    colors: {
        primaryNormal: '#82269E',
        primaryLight: '##9C4FB4',
        primaryDark: '#701F88',

        secondaryNormal: '#A950C4',
        secondaryLight: '#BB71D2',
        secondaryDark: '#9142A8',

        gradient: 'linear-gradient(220.94deg, #A950C4 14.43%, #82269E 85.28%)',

        whiteNormal: '#F3F0F5',
        whiteLight: '#FBF8FC',
        whiteDark: '#EDEAEF',

        blackNormal: '#232224',
        blackLight: '#353436',
        blackDark: '#161617',

        gray50: '#A6A6A7',
        gray100: '#969597',
        gray200: '#868587',
        gray300: '#767576',
        gray400: '#666566',
        gray500: '#555456',
        gray600: '#454446',
    },

    shadows: {
        black: '0px 80px 80px rgba(16, 16, 16, 0.06), 0px 24.1177px 24.1177px rgba(16, 16, 16, 0.0390953), 0px 10.0172px 10.0172px rgba(16, 16, 16, 0.03), 0px 3.62304px 3.62304px rgba(16, 16, 16, 0.0209047)',
        purple1: '0px 17px 17px rgb(169 80 196 / 13%), 0px 5.125px 5.125px rgb(169 80 196 / 8%), 0px 2.12866px 2.12866px rgb(169 80 196 / 7%), 0px 0.7699px 0.7699px rgb(169 80 196 / 5%)',
        purple2: '0px 17px 31px rgb(169 80 196 / 27%), 0px 5.125px 9.34559px rgb(169 80 196 / 18%), 0px 2.12866px 3.88168px rgb(169 80 196 / 14%), 0px 0.7699px 1.40393px rgb(169 80 196 / 9%)',
        purple3: '0px 51px 80px rgba(169, 80, 196, 0.08), 0px 15.375px 24.1177px rgba(169, 80, 196, 0.0521271), 0px 6.38599px 10.0172px rgba(169, 80, 196, 0.04), 0px 2.30969px 3.62304px rgba(169, 80, 196, 0.0278729)',
        purple4: '0px 4px 80px rgba(130, 38, 158, 0.07), 0px 1.20588px 24.1177px rgba(130, 38, 158, 0.0456112), 0px 0.500862px 10.0172px rgba(130, 38, 158, 0.035), 0px 0.181152px 3.62304px rgba(130, 38, 158, 0.0243888)',
    },

    sizes: {
        size1: '0.063rem', // 1px
        size2: '0.125rem', // 2px
        size3: '0.188rem', // 3px
        size4: '0.25rem', // 4px
        size6: '0.375rem', // 6px
        size8: '0.5rem', // 8px
        size12: '0.75rem', // 12px
        size14: '0.875rem', // 14px
        size16: '1rem', // 16px
        size18: '1.125rem', // 18px
        size24: '1.5rem', // 24px
        size32: '2rem', // 32px
        size36: '2.25rem', // 36px
        size40: '2.5rem', // 40px
        size48: '3rem', // 48px
        size52: '3.25rem', // 52px
        size56: '3.5rem', // 56px
        size64: '4rem', // 64px
        size72: '4.5rem', // 72px
        size80: '5rem', // 80px
        size88: '5.5rem', // 88px
        size96: '6rem', // 96px
        size104: '6.5rem', // 104px
        size112: '7rem', // 112px
        size120: '7.5rem', // 120px
        size128: '8rem', // 128px
        size136: '8.5rem', // 136px
        size144: '9rem', // 144px
        size152: '9.5rem', // 152px
        size160: '10rem', // 160px
        size168: '10.5rem', // 168px
        size176: '11rem', // 176px
        size184: '11.5rem', // 184px
        size192: '12rem', // 192px
        size200: '12.5rem', // 200px
    },

    containers: {
        extraLarge: '1440px',
        large: '1140px',
        medium: '960px',
        small: '540px',
    },
};

export const combineTheme = (theme: CustomTheme): DefaultTheme => {
    return { ...defaultTheme, ...theme }
}

export { lightTheme, darkTheme };