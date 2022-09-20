import { ReactSVG } from "react-svg";

import { FooterWrapper } from "./Footer.styled";

// COMPONENTS...
import { List, ListItemAction } from "../List";
import { LinkButton } from "../LinkButton";

// IMGS/SVGS...
import appStoreFullIcon from '../../assets/svgs/icon/icon-app-store-full.svg';
import playStoreFullIcon from '../../assets/svgs/icon/icon-play-store-full.svg';
import brandWhiteSvg from '../../assets/svgs/brand/brand-white.svg';
import facebookIcon from '../../assets/svgs/icon/icon-facebook.svg';
import instagramIcon from '../../assets/svgs/icon/icon-instagram.svg';
import twitterIcon from '../../assets/svgs/icon/icon-twitter.svg';
import youtubeIcon from '../../assets/svgs/icon/icon-youtube.svg';

export const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container flex flex--start-a">
                <div className="flex-item flex-item--1">
                    <h4> Nubank </h4>

                    <List classe="mt mt--2 pt pt--2">
                        <ListItemAction name="Sobre nós" link="#" />
                        <ListItemAction name="Carreiras" link="#" />
                        <ListItemAction name="Perguntas Frequentes" link="#" />
                        <ListItemAction name="Contato" link="#" />
                        <ListItemAction name="Imprensa" link="#" />
                    </List>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Produtos </h4>

                    <List classe="mt mt--2 pt pt--2">
                        <ListItemAction name="Conta Digital" link="#" />
                        <ListItemAction name="Cartão de crédito" link="#" />
                        <ListItemAction name="Rewards" link="#" />
                        <ListItemAction name="Empréstimo" link="#" />
                        <ListItemAction name="Conta PJ" link="#" />
                    </List>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Fale conosco </h4>

                    <List classe="mt mt--2 pt pt--2">
                        <ListItemAction name="0800 608 6236" link="#" />
                        <ListItemAction name="meajuda@nubank.com.br" link="#" />
                        <ListItemAction name="Atendimento 24h" link="#" />
                    </List>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Esplore mais </h4>

                    <List classe="mt mt--2 pt pt--2">
                        <ListItemAction name="Comunidade" link="#" />
                        <ListItemAction name="Blog" link="#" />
                        <ListItemAction name="Newsletter" link="#" />
                    </List>
                </div>

                <div className="flex-item flex-item--2">
                    <h4> Baixe o app </h4>

                    <div className="flex flex--start mt mt--2 pt pt--2">
                        <LinkButton isSecondary link="#">
                            <ReactSVG src={appStoreFullIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>

                        <LinkButton isSecondary link="#" classe="ml ml--4">
                            <ReactSVG src={playStoreFullIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>
                    </div>
                </div>
            </div>

            <div className="container flex--between py py--5">
                <div className="flex flex--start">
                    <ReactSVG className="brand-footer"
                        src={brandWhiteSvg} role="img" aria-label="Nubank logo marca"
                        beforeInjection={ (svg) => {
                            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
                            title.innerHTML = 'Nubank';
                            desc.innerHTML = 'Logo marca da Nubank';
                            svg.prepend(title);
                            svg.prepend(desc);
                        }}
                    />
                    <p className="ml ml--2">
                        Nu Pagamentos S.A.  18.236.120/0001-58 <br />
                        Rua Capote Valente, 39 - São Paulo, SP - 05409-000
                    </p>
                </div>

                <div className="flex flex--start">
                    <List isHorizontal>
                        <ListItemAction link="#">
                            <ReactSVG src={facebookIcon} role="img" aria-label="Facebook logo marca" />
                        </ListItemAction>

                        <ListItemAction link="#">
                            <ReactSVG src={instagramIcon} role="img" aria-label="Instagram logo marca" />
                        </ListItemAction>

                        <ListItemAction link="#">
                            <ReactSVG src={twitterIcon} role="img" aria-label="Twitter logo marca" />
                        </ListItemAction>

                        <ListItemAction link="#">
                            <ReactSVG src={youtubeIcon} role="img" aria-label="Youtube logo marca" />
                        </ListItemAction>
                    </List>
                </div>
            </div>
        </FooterWrapper>
    );
}