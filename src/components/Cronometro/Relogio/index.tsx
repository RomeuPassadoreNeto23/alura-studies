
import style from './Relogio.module.scss';
interface Props {
    tempo: Number | undefined
}

export default function Relogio({tempo = 0 }: Props) {
    const minutos = Math.floor(tempo.valueOf() / 60);
    const segundos = tempo.valueOf() % 60;
    const [minutoDezena, minutoUnida] = String(minutos).padStart(2 ,'0');
    const [segundoDezena,segundoUnidade] = String(segundos).padStart(2 ,'0');
    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnida}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}