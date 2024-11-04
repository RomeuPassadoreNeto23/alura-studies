import React from "react";
import style from './Botao.module.scss';
class Botao extends React.Component <{
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode | undefined,
    onClick?: () => void ;

}> {
    render() {
          const { type = "button", onClick } = this.props;

        return (
            <button type={type} onClick={onClick} className={style.botao}>
                {this.props.children}
            </button>
        )

    }

}
export default Botao;