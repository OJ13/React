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
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from './components/condicional/ParOuImpar.jsx'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai.jsx'
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega Sena" color="#42AF42">
        <Mega></Mega>
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={20}></Contador>
        {/* <Contador numero={100}></Contador> */}
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome : 'Vanndame' }}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>
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
