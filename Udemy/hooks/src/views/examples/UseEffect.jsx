import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if (n < 0 ) return -1 
    if (n === 0) return 1

    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('Ímpar')

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 10000000) {
            document.title = "Eitaaa D+!!!"
        }
    }, [fatorial])

    useEffect(function() {
        setStatus(number%2 === 0 ? 'Par' : 'Ímpar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial  === -1 ? 'Não Existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(+e.target.value)} />
                {/* <span className="text">{number}</span> */}
            </div>
            
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
