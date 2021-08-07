import React from "react";
import './App.css';

import Card from './components/layout/Card'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from './components/basicos/Familia'
import Membro from './components/basicos/FamiliaMembro'
import ListaAlunos from "./components/repeticao/ListaAlunos";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>  
      </Card>
      <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
        <Familia sobrenome="Boxer">
           <Membro nome="Rocky" /> 
           
           <Membro nome="John" /> 
           <Membro nome="Apollo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento"color="#E94c6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametros" color="#E8871A">
        <ComParametro
            titulo="Aprendendo React"
            subtitulo="Nivel 2"
            valorCurso={100.95}/>
      </Card>

      <Card titulo="#01 - Primeiro" color="#588C73">
          <Primeiro></Primeiro>
      </Card>  
    </div>    
  </div>
);
