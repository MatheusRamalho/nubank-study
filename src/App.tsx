import { BrowserRouter, Link } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ReactSVG } from 'react-svg';

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

// IMGS/SVGS...
import facebookIcon from './assets/svgs/icon/icon-facebook.svg';
import instagramIcon from './assets/svgs/icon/icon-instagram.svg';
import twitterIcon from './assets/svgs/icon/icon-twitter.svg';
import youtubeIcon from './assets/svgs/icon/icon-youtube.svg';

export const App = () => {
	const [theme] = usePersistedState<DefaultTheme>('theme', combineTheme(lightTheme));

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />

				{/* --------------------------------------------------------------------------
				| HEADER...
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
						<NavItemMobile classe="mb mb--1" name="Nubank" link="#" />
						<NavItemMobile classe="mb mb--1" name="Conta digital" link="#" />
						<NavItemMobile classe="mb mb--1" name="Quero ser Nubank" link="#" />
						<NavItemMobile isVariation>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG src={facebookIcon} role="img" aria-label="Facebook logo marca" />
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG src={instagramIcon} role="img" aria-label="Instagram logo marca" />
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG src={twitterIcon} role="img" aria-label="Twitter logo marca" />
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG src={youtubeIcon} role="img" aria-label="Youtube logo marca" />
							</Link>
						</NavItemMobile>
					</NavbarMobileMenu>
				</Navbar>

				{/* --------------------------------------------------------------------------
				| CONTENT...
				|-------------------------------------------------------------------------- */}
				<main className="content">
					<Routers />
				</main>

				{/* --------------------------------------------------------------------------
				| FOOTER...
				|-------------------------------------------------------------------------- */}
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}
