import { ReactSVG } from "react-svg";

// COMPONENTS...
import { Section } from "../../components/Section";
import { LinkButton } from "../../components/LinkButton";

// IMGS/SVGS...
import appStoreIcon from '../../assets/svgs/icon-app-store.svg';
import playStoreIcon from '../../assets/svgs/icon-play-store.svg';
import cardIcon from '../../assets/svgs/icon-card.svg';
import mobileIcon from '../../assets/svgs/icon-mobile.svg';
import contactlessIcon from '../../assets/svgs/icon-contactless.svg';
import heroBackground from '../../assets/svgs/bg-home.svg';

export const HomePage = () => {
    return (
        <>
            {/* --------------------------------------------------------------------------
            | SECTION HERO...
            |-------------------------------------------------------------------------- */}
            <Section classe="hero" id="sect-hero" legend="Section de aterrissagem">
                <div className="hero-bg">
                    <ReactSVG className="svg-bg-hero" src={heroBackground} role="img" aria-label="" />
                </div>

                <div className="container py py--9">
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
                </div>
            </Section>
        </>
    );
}