import ReactDOM  from 'react-dom'
import React from 'react'

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
        <div>
            <Primeiro />
            <ComParametro titulo="Aprendendo React" subtitulo="Nivel 2" valorCurso={ 100.95 }/>
        </div>,
        document.getElementById('root')
)