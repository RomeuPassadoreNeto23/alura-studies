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
      selecionado: tarefa.id === tarefaSelecionada.id ? true:false

    })))


  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa} />
      <Cronometro />

    </div>
  );
}

export default App;
