import { ITarefas } from '../../../types/tarefas'
import style from './Item.module.scss'
interface Props extends ITarefas  {
    selecionarTarefa:(tarefaSelecionado:ITarefas) => void

}
 export default function Item({tarefa,tempo,selecionado,completado,id, selecionarTarefa}:Props) {
    
    return (
        <li  className={`${style.item}  ${selecionado ? style.itemSelecionado :''} ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionarTarefa({tarefa,tempo,selecionado,completado,id})}>
            <h3>{tarefa}</h3>
            <samp>{tempo}</samp>
            {completado && <samp className={style.concluido} aria-label='tarefa completada'></samp>}
        </li>
    )

}