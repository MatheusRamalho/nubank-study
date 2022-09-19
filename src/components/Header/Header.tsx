import { HeaderProps } from "./Header.types";

export const Header = ({ caption, title, description}: HeaderProps) => {
    return (
        <>
            <h5 className="mb mb--1 mt mt--2"> {caption} </h5>
            <h2 className="mb mb--1"> {title} </h2>
            {description && <p className="my my--2"> {description} </p> }
        </>
    );
}