import Botao from "../Botao"; // Importa o componente de botão para uso no cronômetro
import Relogio from "./Relogio"; // Importa o componente de relógio para exibir o tempo
import style from './Cronometro.module.scss'; // Importa os estilos específicos do cronômetro
import { tempoParaSegundos } from "../../common/utils/time"; // Importa a função para converter tempo em segundos
import { ITarefas } from "../../types/tarefas"; // Importa o tipo de tarefa para tipagem
import { useEffect, useState } from "react"; // Importa hooks do React para gerenciar estado e efeito

// Define as propriedades aceitas pelo componente Cronômetro
interface Props {
    selecionado: ITarefas | undefined, // Tarefa selecionada, que o cronômetro deve rastrear
    finazilarTarefa: () => void // Função a ser executada quando o cronômetro termina
}

// Função do componente Cronômetro
export default function Cronometro({ selecionado, finazilarTarefa }: Props) {
    const [tempo, setTempo] = useState<Number>(); // Estado para o tempo restante em segundos

    // Efeito que converte o tempo da tarefa selecionada em segundos
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]); // Reexecuta quando uma nova tarefa é selecionada

    // Função recursiva de contagem regressiva
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1); // Reduz o contador em 1 segundo
                return regressiva(contador - 1); // Chama a função novamente até que o contador chegue a 0
            }
            finazilarTarefa(); // Chama a função para finalizar a tarefa quando o tempo acaba
        }, 1000); // Espera 1 segundo entre cada iteração
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um carde inicie o cronômetro</p> {/* Texto orientando o usuário */}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} /> {/* Renderiza o componente Relogio com o tempo atual */}
            </div>
            <Botao onClick={() => regressiva(tempo?.valueOf())}>
                Começar! {/* Botão para iniciar a contagem regressiva */}
            </Botao>
        </div>
    );
}
