// Define a interface ITarefas, que descreve o formato de cada tarefa no aplicativo
export interface ITarefas {
    tarefa: string; // Nome ou descrição da tarefa a ser realizada
    tempo: string; // Duração da tarefa no formato de tempo (por exemplo, "00:30:00")
    selecionado: boolean; // Indica se a tarefa está selecionada pelo usuário
    completado: boolean; // Indica se a tarefa foi concluída
    id: string; // Identificador único da tarefa, geralmente gerado com UUID
}
