import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefas";
import { useEffect, useState } from "react";
interface Props {
    selecionado: ITarefas | undefined
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<Number>();
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))

        }
    }, [selecionado])


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um carde inicie o cronômetro  </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>

    )
}