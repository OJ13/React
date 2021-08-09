import './Contador.css'
import React, { Component } from 'react'

class Contador extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }
    // constructor(props) {
    //     super(props)

    //     this.inc = this.inc.bind(this);
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 0
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo 
        })
    }

    alterarPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor Inicial: { this.props.numeroInicial }</p>
                <p>
                    <label htmlFor="passoInput">Passo:</label>
                    <input type="number" id="passoInput" 
                        value={this.state.passo} onChange={this.alterarPasso}/>
                </p>
                <p>Valor: { this.state.numero }</p>
                {/* <button onClick={_ => this.inc()}>+</button> */}
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador
// export default class Contador extends Component{
// }

// export default class Contador extends React.Component{
// }