import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

// HOOKS...
import { usePersistedState } from './helpers/hooks/usePersistedState';

// ROUTES...
import { Routers } from './routers/Routes';

// STYLES...
import { combineTheme, lightTheme } from "./styles/themes/default";
import GlobalStyle from './styles/global';

export const App = () => {
	const [theme] = usePersistedState<DefaultTheme>('theme', combineTheme(lightTheme));

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Routers />
			</BrowserRouter>
		</ThemeProvider>
	);
}
