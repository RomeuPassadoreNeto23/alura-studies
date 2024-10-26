import React from "react";

function Lista() {
    const tarefa = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefa.map((item, index) => (
                    <li key={index} >
                        <h3>{item.tarefa}</h3>
                        <samp>{item.tempo}</samp>
                    </li>

                ))}
            </ul>
        </aside>
    )
}
export default Lista;