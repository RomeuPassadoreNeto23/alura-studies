import style from './Lista.module.scss'; // Importa os estilos específicos para a lista
import Item from "./Item"; // Importa o componente Item para exibir cada tarefa individualmente
import { ITarefas } from '../../types/tarefas'; // Importa o tipo de tarefas para tipagem

// Define as propriedades aceitas pelo componente Lista
interface Props {
    tarefas: ITarefas[]; // Array de tarefas
    selecionarTarefa: (tarefaSelecionado: ITarefas) => void; // Função para selecionar uma tarefa
}

// Componente Lista para exibir a lista de tarefas
function Lista({ tarefas, selecionarTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2> {/* Título da lista */}
            <ul>
                {tarefas.map((item) => (
                    // Renderiza cada tarefa como um componente Item
                    <Item 
                        selecionarTarefa={selecionarTarefa} 
                        key={item.id} 
                        {...item} 
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista; // Exporta o componente Lista
