import { useState } from 'react';
import Cronometro from '../components/Cronometro/indext';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import { ITarefas } from "../types/tarefas";



function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  const [selecionado, setSelecionado] = useState<ITarefas>();
  function selecionarTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false

    })))


  }
  function finazilarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa} />
      <Cronometro selecionado={selecionado} finazilarTarefa={finazilarTarefa} />

    </div>
  );
}

export default App;
