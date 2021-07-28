import React from "react"

export default function ComParametro(props) {
    const status = props.valorCurso <= 50.00 ? "Promoção" : "Normal"
    return (
        <div>
            <h2>Titulo: { props.titulo }</h2>
            <h3>Subtitulo: { props.subtitulo }</h3>
            <p>Valor: { props.valorCurso } - { status }</p>
        </div>
    )
}