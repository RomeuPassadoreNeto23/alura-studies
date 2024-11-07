import { useState } from 'react';
// Importa o componente Cronômetro, Formulário e Lista para serem utilizados na aplicação
import Cronometro from '../components/Cronometro/indext';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
// Importa o estilo específico da aplicação
import style from './App.module.scss';
// Importa o tipo ITarefas para tipar as tarefas
import { ITarefas } from "../types/tarefas";

function App() {
  // Declara um estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  // Declara um estado para armazenar a tarefa atualmente selecionada
  const [selecionado, setSelecionado] = useState<ITarefas>();

  // Função para selecionar uma tarefa
  function selecionarTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    // Atualiza a lista de tarefas para marcar a tarefa selecionada
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id // Marca a tarefa selecionada como 'true'
      }))
    );
  }

  // Função para finalizar uma tarefa
  function finazilarTarefa() {
    if (selecionado) {
      setSelecionado(undefined); // Desmarca a tarefa selecionada
      // Atualiza a lista de tarefas para marcar a tarefa como concluída
      setTarefas(tarefaAnteriores => 
        tarefaAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false, // Desmarca a seleção
              completado: true // Marca como concluída
            }
          }
          return tarefa;
        })
      );
    }
  }

  // Renderiza o componente com os elementos da aplicação
  return (
    <div className={style.AppStyle}>
      {/* Renderiza o formulário para adicionar novas tarefas */}
      <Formulario setTarefas={setTarefas} />
      {/* Renderiza a lista de tarefas */}
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa} />
      {/* Renderiza o cronômetro com a tarefa selecionada e a função de finalizar */}
      <Cronometro selecionado={selecionado} finazilarTarefa={finazilarTarefa} />
    </div>
  );
}

export default App;
