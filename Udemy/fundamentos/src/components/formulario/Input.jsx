import React, { useState } from "react"
import './Input.css'

export default (props) => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/*Input controlado*/}
                <input value={valor} onChange={quandoMudar} />
                {/*Input que não tenha onChange tem que ser readonly*/}
                <input value={valor} readOnly />
                {/*Input não controlado*/}
                <input value={undefined} />
            </div>
        </div>
    )
}