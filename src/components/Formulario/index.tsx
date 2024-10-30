import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { ITarefas } from "../../types/tarefas";
import { v4 as uuidv4 } from 'uuid';
class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"

    }
    adicionarTerefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state, selecionado: false, completado: false, id: uuidv4() }])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })


    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTerefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicoine um novo estudo
                    </label>
                    <input type="text"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        name="tarefa"
                        placeholder="O que  voçê quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )

    }
}
export default Formulario;