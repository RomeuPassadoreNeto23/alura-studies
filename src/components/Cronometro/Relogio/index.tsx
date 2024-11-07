import style from './Relogio.module.scss'; // Importa os estilos específicos para o relógio

// Define as propriedades aceitas pelo componente Relogio
interface Props {
    tempo: Number | undefined; // Tempo total em segundos
}

// Função do componente Relogio que renderiza os minutos e segundos restantes
export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo.valueOf() / 60); // Converte o tempo para minutos
    const segundos = tempo.valueOf() % 60; // Obtém os segundos restantes
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); // Separa os dígitos dos minutos
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0'); // Separa os dígitos dos segundos

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    );
}
