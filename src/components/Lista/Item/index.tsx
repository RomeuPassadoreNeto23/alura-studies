import { ITarefas } from '../../../types/tarefas'
import style from '../Lista.module.scss'
 export default function Item({tarefa,tempo,selecionado,completado,id}:ITarefas) {
    
    return (
        <li  className={style.item} >
            <h3>{tarefa}</h3>
            <samp>{tempo}</samp>
        </li>
    )

}