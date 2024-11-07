import React, { useState } from "react"; // Importa o React e o hook useState para gerenciar o estado
import Botao from "../Botao"; // Importa o componente de botão para ser usado no formulário
import style from './Formulario.module.scss'; // Importa os estilos específicos para o formulário
import { ITarefas } from "../../types/tarefas"; // Importa o tipo de tarefas para tipagem
import { v4 as uuidv4 } from 'uuid'; // Importa o gerador de UUID para criar IDs únicos para cada tarefa

// Define as propriedades aceitas pelo componente Formulario
interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>; // Função para atualizar a lista de tarefas no estado principal
}

// Componente Formulario para adicionar novas tarefas
function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState(""); // Estado para armazenar o nome da tarefa
    const [tempo, setTempo] = useState("00:00"); // Estado para armazenar o tempo da tarefa

    // Função para adicionar uma nova tarefa
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Adiciona uma nova tarefa à lista existente
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }
        ]);
        setTarefa(""); // Limpa o campo de tarefa
        setTempo("00:00"); // Reseta o campo de tempo
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            {/* Campo de entrada para o nome da tarefa */}
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    name="tarefa"
                    placeholder="O que você quer estudar"
                    required
                />
            </div>

            {/* Campo de entrada para o tempo da tarefa */}
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required 
                />
            </div>

            {/* Botão para adicionar a tarefa */}
            <Botao type="submit">Adicionar</Botao>
        </form>
    );
}

export default Formulario; // Exporta o componente Formulario
