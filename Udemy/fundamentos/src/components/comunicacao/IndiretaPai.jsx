import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false    
    //chamada no filho
    function fonecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nome, idade, nerd);
    }
    return (
        <div>
            <div>Pai</div>
            <span><strong>{nome}</strong> - {idade} - {nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fonecerInformacoes}></IndiretaFilho>
        </div>
    )
}