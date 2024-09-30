import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const nome = 'Luiza'

  return (
    <div className="App">
      <HelloWorld />

      <SayMyName nome="Gabriel" />
      <SayMyName nome={nome} />

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
    </div>
  );
}

export default App;
