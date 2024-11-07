import './App.css';

import { useState } from 'react'

import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const nomeLu = 'Luiza'
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <HelloWorld />

      <SayMyName nome="Gabriel" />
      <SayMyName nome={nomeLu} />

      <Pessoa
        nome="Gabriel"
        idade="21"
        profissao="Programador"
        foto="https://via.placeholder.com/150" />

      <Lista />

      <h1>Testando Eventos</h1>
      <Eventos />
      <Form />

      <h1>Renderização Condicional</h1>
      <Condicional />

      <h1>Renderização de Listas</h1>
      <OutraLista itens = {meusItens}/>
      <OutraLista itens = {[]}/>

      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
      
    </div>
  );
}

export default App;
