import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
    //chamada no filho
    function fonecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return (
        <div>
            <div>Pai</div>
            <span><strong>{nome}</strong> - {idade} - {nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fonecerInformacoes}></IndiretaFilho>
        </div>
    )
}