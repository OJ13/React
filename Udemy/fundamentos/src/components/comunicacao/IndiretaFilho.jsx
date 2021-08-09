import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 80
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}