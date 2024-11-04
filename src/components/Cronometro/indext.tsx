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
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0 ) {
                setTempo( contador - 1)
                return regressiva( contador -1)
            }

        }, 1000)

    }


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um carde inicie o cronômetro  </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo?.valueOf())}>
                Começar!
            </Botao>
        </div>

    )
}