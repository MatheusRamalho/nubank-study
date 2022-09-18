import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

// COMPONENTS...
import { Section } from "../../components/Section";
import { LinkButton } from "../../components/LinkButton";

// IMGS/SVGS...
import brandSvg from '../../assets/svgs/brand.svg';
import appStoreIcon from '../../assets/svgs/icon-app-store.svg';
import playStoreIcon from '../../assets/svgs/icon-play-store.svg';

export const HomePage = () => {
    return (
        <>
            {/* --------------------------------------------------------------------------
            | SECTION HERO...
            |-------------------------------------------------------------------------- */}
            <Section classe="border" id="sect-hero" legend="Section de aterrissagem">
                <div className="flex-item flex-item--1">
                    <h1> Ser Nubank é reinventar sua vida financeira. </h1>
                    <p> Conta com rendimento acima da poupança, cartão de crédito sem anuidade e o melhor: resolva tudo pelo app. </p>

                    <div className="flex">
                        <LinkButton link="#" name="Quero ser Nubank" />

                        <LinkButton isTertiary link="#">
                            <ReactSVG src={appStoreIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>
                        <LinkButton isTertiary link="#">
                            <ReactSVG src={playStoreIcon} role="img" aria-label="Nubank logo marca" />
                        </LinkButton>
                    </div>
                </div>

                <div className="flex-item flex-item--3">
                    <ReactSVG
                        src={brandSvg} role="img" aria-label="Nubank logo marca"
                        beforeInjection={(svg) => {
                            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
                            title.innerHTML = 'Nubank';
                            desc.innerHTML = 'Logo marca da Nubank';
                            svg.prepend(title);
                            svg.prepend(desc);
                        }}
                    />
                </div>
            </Section>
        </>
    );
}