import { SectionWrapper } from "./Section.styled";
import { SectionProps } from "./Section.types";

export const Section = ({ id, legend, children, classe }: SectionProps) => {
    return (
        <SectionWrapper className={classe} id={id}>
            <h6 hidden> {legend} </h6>

            <div className="container">
                {children}
            </div>
        </SectionWrapper>
    );
}