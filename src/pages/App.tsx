import { useState } from 'react';
import Cronometro from '../components/Cronometro/indext';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import { ITarefas } from "../types/tarefas";


function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>

    </div>
  );
}

export default App;
