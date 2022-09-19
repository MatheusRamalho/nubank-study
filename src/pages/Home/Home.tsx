import { ReactSVG } from "react-svg";

// COMPONENTS...
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { List, ListItem } from "../../components/List";
import { LinkButton } from "../../components/LinkButton";

// IMGS/SVGS...
import brandFull from '../../assets/svgs/brand/brand-full.svg';
import heroBg from '../../assets/svgs/bg/bg-hero.svg';
import inviteBg from '../../assets/svgs/bg/bg-invite.svg';
import appStoreIcon from '../../assets/svgs/icon/icon-app-store.svg';
import playStoreIcon from '../../assets/svgs/icon/icon-play-store.svg';
import appStoreFullIcon from '../../assets/svgs/icon/icon-app-store-full.svg';
import playStoreFullIcon from '../../assets/svgs/icon/icon-play-store-full.svg';
import checkIcon from '../../assets/svgs/icon/icon-check.svg';
import cardIcon from '../../assets/svgs/icon/icon-card.svg';
import mobileIcon from '../../assets/svgs/icon/icon-mobile.svg';
import configIcon from '../../assets/svgs/icon/icon-config.svg';
import timeIcon from '../../assets/svgs/icon/icon-time.svg';
import contactlessIcon from '../../assets/svgs/icon/icon-contactless.svg';
import cashIcon from '../../assets/svgs/icon/icon-cash.svg';
import transferIcon from '../../assets/svgs/icon/icon-transfer.svg';
import phoneIcon from '../../assets/svgs/icon/icon-phone.svg';
import people1Svg from '../../assets/svgs/people/people1.svg';
import people2Svg from '../../assets/svgs/people/people2.svg';
import people3Svg from '../../assets/svgs/people/people3.svg';
import digitalAccountSvg from '../../assets/svgs/app/digital-account.svg';
import cardDoubleSvg from '../../assets/svgs/card/card-double.svg';

export const HomePage = () => {
    return (
        <>
            {/* --------------------------------------------------------------------------
            | SECTION HERO...
            |-------------------------------------------------------------------------- */}
            <div className="hero-wrapper">
                <div className="hero-bg">
                    <ReactSVG className="svg-bg-hero" src={heroBg} role="img" aria-label="" />
                </div>

                <Section classe="hero-sect py py--9" id="sect-hero" legend="Section de aterrissagem">
                    <div className="flex-item flex-item--1 py py--7">
                        <h1> Ser Nubank é reinventar sua vida financeira. </h1>
                        <p className="my my--2"> Conta com rendimento acima da poupança, cartão de crédito sem anuidade e o melhor: resolva tudo pelo app. </p>

                        <div className="flex flex--start">
                            <LinkButton link="#" name="Quero ser Nubank" />

                            <LinkButton isTertiary link="#">
                                <ReactSVG src={appStoreIcon} role="img" aria-label="Nubank logo marca" />
                            </LinkButton>

                            <LinkButton isTertiary link="#">
                                <ReactSVG src={playStoreIcon} role="img" aria-label="Nubank logo marca" />
                            </LinkButton>
                        </div>
                    </div>

                    <div className="hero-card flex flex--center flex-item flex-item--3 py py--7">
                        <ReactSVG className="icon-card-hero" src={cardIcon} role="img" aria-label="" />
                        <ReactSVG className="icon-mobile-hero" src={mobileIcon} role="img" aria-label="" />
                        <ReactSVG className="icon-contactless-hero" src={contactlessIcon} role="img" aria-label="" />

                        <div className="card"></div>
                    </div>
                </Section>
            </div>

            {/* --------------------------------------------------------------------------
            | SECTION PEOPLE...
            |-------------------------------------------------------------------------- */}
            <Section classe="people" id="sect-people" legend="Section para todos">
                <div className="flex-item flex-item--4 flex flex--column flex--start-a mx mx--2">
                    <Header
                        caption="Para todos"
                        title="Completo."
                        description="Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem tarifas abusivas. Cuide do seu dinheiro de um jeito simples. Somos eficientes para você usar seu dinheiro com o que realmente importa, sem tarifas de manutenção."
                    />

                    <List>
                        <ListItem
                            title="100% gratuito."
                            description="Isso mesmo, você não paga nada para abrir sua conta."
                        >
                            <ReactSVG src={checkIcon} role="img" aria-label="" />
                        </ListItem>

                        <ListItem
                            title="Sem taxas ou cobranças."
                            description="Não se preocupe com taxas adicionais ou anuidades."
                        >
                            <ReactSVG src={checkIcon} role="img" aria-label="" />
                        </ListItem>

                        <ListItem
                            title="O melhor suporte de todos."
                            description="Segundo pesquisas, temos o melhor suporte pra você."
                        >
                            <ReactSVG src={checkIcon} role="img" aria-label="" />
                        </ListItem>
                    </List>

                    <LinkButton isQuaternary link="#"> Confira os benefícios </LinkButton>
                </div>

                <div className="flex-item flex-item--3 mx mx--2">
                    <ReactSVG src={people1Svg} role="img" aria-label="" />
                </div>

                <div className="flex-item flex-item--1 flex flex--column mx mx--2 my my--3">
                    <ReactSVG id="people2" className="mb mb--4" src={people2Svg} role="img" aria-label="" />
                    <ReactSVG src={people3Svg} role="img" aria-label="" />
                </div>
            </Section>

            {/* --------------------------------------------------------------------------
            | SECTION THE BEST...
            |-------------------------------------------------------------------------- */}
            <Section classe="the-best" id="sect-the-best" legend="Section o melhor de todos os bancos">
                <div className="best px px--5 py py--7">
                    <div className="best-item flex-item flex-item--auto m m--2">
                        <Header
                            caption="O melhor"
                            title="Por que Nubank?"
                        />
                    </div>

                    <div className="best-item flex-item flex-item--auto flex flex--center flex--column">
                        <ReactSVG src={cashIcon} role="img" aria-label="" />
                        <p className="mt mt--2"> Conta rende mais que a poupança </p>
                    </div>

                    <div className="best-item flex-item flex-item--auto flex flex--center flex--column">
                        <ReactSVG src={transferIcon} role="img" aria-label="" />
                        <p className="mt mt--2"> Transferências e TEDs ilimitados </p>
                    </div>

                    <div className="best-item flex-item flex-item--auto flex flex--center flex--column">
                        <ReactSVG src={cardIcon} role="img" aria-label="" />
                        <p className="mt mt--2"> Conta e cartão 100% gratuitos </p>
                    </div>

                    <div className="best-item flex-item flex-item--auto flex flex--center flex--column">
                        <ReactSVG src={phoneIcon} role="img" aria-label="" />
                        <p className="mt mt--2"> O melhor suporte 24h do Brasil </p>
                    </div>
                </div>
            </Section>

            {/* --------------------------------------------------------------------------
            | SECTION DIGITAL ACCOUNT...
            |-------------------------------------------------------------------------- */}
            <Section classe="digital-account" id="sect-digital-account" legend="Section conta digital">
                <div className="flex-item flex-item--1 flex flex--center mx mx--3">
                    <ReactSVG className="account-svg" src={digitalAccountSvg} role="img" aria-label="" />
                </div>

                <div className="flex-item flex-item--1 flex flex--column flex--start-a mx mx--2">
                    <Header
                        caption="Conta digital"
                        title="Tudo pelo App."
                        description="Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil. Pague suas contas, ajuste seu limite, bloqueie e desbloqueie o cartão quando quiser e acompanhe cada movimentação em tempo real. Tudo pelo aplicativo."
                    />

                    <List>
                        <ListItem
                            title="Tudo na palma da sua mão."
                            description="Conta digital. Você resolve tudo pelo App. Tudo."
                        >
                            <ReactSVG src={mobileIcon} role="img" aria-label="" />
                        </ListItem>

                        <ListItem
                            title="Sem filas ou burocracias."
                            description="Investimos no melhor suporte pra isso. Não tem filas. Economia de tempo."
                        >
                            <ReactSVG src={configIcon} role="img" aria-label="" />
                        </ListItem>

                        <ListItem
                            title="Configure tudo no app."
                            description="Toda a configuração e acesso aos novos recursos a um clique de distância."
                        >
                            <ReactSVG src={timeIcon} role="img" aria-label="" />
                        </ListItem>
                    </List>

                    <LinkButton isQuaternary link="#"> Segura e sem conplicações </LinkButton>
                </div>
            </Section>

            {/* --------------------------------------------------------------------------
            | SECTION CARD...
            |-------------------------------------------------------------------------- */}
            <Section classe="credit-card" id="sect-credit-card" legend="Section tudo no app">
                <div className="flex-item flex-item--3 flex flex--column flex--start-a mx mx--2">
                    <Header
                        caption="Seu roxinho"
                        title="Crédito e débito."
                        description="Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também. Facilidade e segurança para você em mais de 30 milhões de estabelecimentos, além dos benefícios Mastercard."
                    />

                    <List>
                        <ListItem
                            title="Tecnologia Contactless"
                            description="Tecnologia de pagamento por aproximação. Mais agilidade no dia a dia."
                        >
                            <ReactSVG src={contactlessIcon} role="img" aria-label="" />
                        </ListItem>

                        <ListItem
                            title="Cartão virtual."
                            description="Você pode gerar cartões virtuais no app para suas compras online. Mais segurança."
                        >
                            <ReactSVG src={cardIcon} role="img" aria-label="" />
                        </ListItem>
                    </List>

                    <LinkButton isQuaternary link="#"> Saiba mais </LinkButton>
                </div>

                <div className="flex-item flex-item--1 flex flex--center mx mx--3">
                    <ReactSVG className="card-svg" src={cardDoubleSvg} role="img" aria-label="" />
                </div>
            </Section>

            {/* --------------------------------------------------------------------------
            | SECTION APP DOWNLOAD...
            |-------------------------------------------------------------------------- */}
            <Section classe="app-download" id="sect-app-download" legend="Section baixe o app e crie sua conta">
                <div className="flex-item flex-item--3 flex flex--column flex--start-a mx mx--2">
                    <Header
                        caption="Faça sua conta"
                        title="Baixe. É gratuito."
                        description="Vamos lá, junte-se aos mais de 20 milhões que escolheram o Nubank. Conte com o banco digital que mais cresce no Brasil. É de graça. É para todos. Clique e baixe o App."
                    />

                    <div className="flex flex--start">
                        <LinkButton isSecondary link="#">
                            <ReactSVG src={appStoreFullIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>

                        <LinkButton isSecondary link="#" classe="ml ml--4">
                            <ReactSVG src={playStoreFullIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>
                    </div>
                </div>

                <div className="flex-item flex-item--1 flex flex--center mx mx--3">
                    <ReactSVG className="brand-download-svg" src={brandFull} role="img" aria-label="" />
                </div>
            </Section>

            {/* --------------------------------------------------------------------------
            | SECTION INVITE...
            |-------------------------------------------------------------------------- */}
            <div className="invite-wrapper">
                <div className="invite-bg">
                    <ReactSVG className="svg-bg-invite" src={inviteBg} role="img" aria-label="" />
                </div>

                <Section classe="invite" id="sect-invite" legend="Section baixe o app e crie sua conta">
                    <div className="flex-item flex-item--1 flex flex--column flex--center mx mx--2 invite-content">
                        <Header
                            caption="Nuconta"
                            title="O melhor dos bancos digitais. Pra você."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra."
                        />

                        <LinkButton link="#" name="Quero ser Nubank" />
                    </div>
                </Section>
            </div>
        </>
    );
}