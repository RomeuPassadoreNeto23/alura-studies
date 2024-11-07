import { ITarefas } from '../../../types/tarefas'; // Importa o tipo de tarefas para tipagem
import style from './Item.module.scss'; // Importa os estilos específicos para o item

// Define as propriedades aceitas pelo componente Item, incluindo a função para selecionar uma tarefa
interface Props extends ITarefas {
    selecionarTarefa: (tarefaSelecionado: ITarefas) => void;
}

// Componente Item que representa uma tarefa na lista
export default function Item({ tarefa, tempo, selecionado, completado, id, selecionarTarefa }: Props) {
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => !completado && selecionarTarefa({ tarefa, tempo, selecionado, completado, id })}
        >
            <h3>{tarefa}</h3> {/* Exibe o nome da tarefa */}
            <span>{tempo}</span> {/* Exibe o tempo da tarefa */}
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>} {/* Exibe um ícone se a tarefa estiver concluída */}
        </li>
    );
}
