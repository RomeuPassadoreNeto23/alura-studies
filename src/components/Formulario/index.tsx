import React from "react";
import Botao from "../Botao";
class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicoine um novo estudo
                    </label>
                    <input type="text"
                           id="tarefa"
                        name="tarefa"
                        placeholder="O que  voçê quer estudar"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Botao />
            </form>
        )

    }
}
export default Formulario;