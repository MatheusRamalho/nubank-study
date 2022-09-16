import { ButtonHTMLAttributes } from "react"; // Tem todas as propriedades que um button html aceita.

// Utilizando o & no final e adicionando chaves
// Indica que além de receber todas as propriedades padrão do html (ButtonHTMLAttributes<HTMLButtonElement>)
// Vai receber mais algumas propriedades informadas.
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    name?: string;
    link?: string;
    isSecondary?: boolean,
};