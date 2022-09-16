import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

// HOOKS...
import { usePersistedState } from './helpers/hooks/usePersistedState';

// ROUTES...
import { Routers } from './routers/Routes';

// STYLES...
import { combineTheme, lightTheme } from "./styles/themes/default";
import GlobalStyle from './styles/global';

// COMPONENTS...
import { Navbar, NavbarDesktop, NavbarMobile, NavbarMobileMenu, NavItem, NavItemMobile } from './components/Navbar';
import { DropdownItem, DropdownMenu } from './components/Dropdown';
import { Footer } from './components/Footer';

export const App = () => {
	const [theme] = usePersistedState<DefaultTheme>('theme', combineTheme(lightTheme));
	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />

				{/* --------------------------------------------------------------------------
				| MENU...
				|-------------------------------------------------------------------------- */}
				<Navbar>
					<NavbarDesktop>
						<NavItem name="Nubank">
							<DropdownMenu>
								<DropdownItem name="O Nu" link="#" />
								<DropdownItem name="Carreiras" link="#" />
								<DropdownItem name="Imprensa" link="#" />
							</DropdownMenu>
						</NavItem>

						<NavItem name="Conta digital">
							<DropdownMenu>
								<DropdownItem name="Crie sua conta" link="#" />
								<DropdownItem name="Transferências" link="#" />
								<DropdownItem name="Rendimento" link="#" />
							</DropdownMenu>
						</NavItem>

						<NavItem name="Pra você">
							<DropdownMenu>
								<DropdownItem name="Comunidade" link="#" />
								<DropdownItem name="Rewards" link="#" />
								<DropdownItem name="Novidades" link="#" />
							</DropdownMenu>
						</NavItem>
					</NavbarDesktop>

					<NavbarMobile></NavbarMobile>

					<NavbarMobileMenu>
						<NavItemMobile name="Nubank" link="#" />
						<NavItemMobile name="Conta digital" link="#" />
						<NavItemMobile name="Quero ser Nubank" link="#" />
						<NavItemMobile name="Redes Sociais" link="#" />
					</NavbarMobileMenu>
				</Navbar>

				{/* --------------------------------------------------------------------------
				| CONTENT...
				|-------------------------------------------------------------------------- */}
				<Routers />

				{/* --------------------------------------------------------------------------
				| FOOTER...
				|-------------------------------------------------------------------------- */}
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}
