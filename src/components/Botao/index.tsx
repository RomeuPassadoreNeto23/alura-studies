import React from "react";
// Importa o estilo específico do botão
import style from './Botao.module.scss';

// Define as propriedades aceitas pelo componente Botão
interface Props {
    type?: "button" | "submit" | "reset" | undefined, // Define o tipo do botão (pode ser "button", "submit", "reset" ou indefinido)
    children?: React.ReactNode | undefined, // Conteúdo exibido dentro do botão (pode ser texto, ícones, etc.)
    onClick?: () => void; // Função a ser executada quando o botão é clicado
}

// Função que define o componente Botão
function Botao({ onClick, type, children }: Props) {
    return (
        // Renderiza um elemento <button> com as propriedades passadas
        <button type={type} onClick={onClick} className={style.botao}>
            {children} {/* Exibe o conteúdo passado como children dentro do botão */}
        </button>
    );
}

export default Botao; // Exporta o componente Botão para ser usado em outras partes da aplicação
