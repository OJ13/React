import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
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
        passo: this.props.passoInicial || 1
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

    alterarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <p>Valor Inicial: { this.props.numeroInicial }</p>
                <PassoForm passo={this.state.passo} setPasso={this.alterarPasso} />
                {/* <button onClick={_ => this.inc()}>+</button> */}
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador
// export default class Contador extends Component{
// }

// export default class Contador extends React.Component{
// }