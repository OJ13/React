import React from 'react'

export default props => {
    
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('João', 55, true)
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}