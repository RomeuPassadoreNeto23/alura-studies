// Função que converte um tempo no formato "hh:mm:ss" para segundos
export function tempoParaSegundos(tempo: string) {
    // Desestrutura a string de tempo em horas, minutos e segundos, com valores padrão de '0' caso algum não esteja presente
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");
    
    // Converte as horas para segundos
    const horasEmSegundos = Number(horas) * 3600;
    
    // Converte os minutos para segundos
    const minutosEmSegundos = Number(minutos) * 60;
    
    // Soma todos os valores convertidos para obter o tempo total em segundos
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}
