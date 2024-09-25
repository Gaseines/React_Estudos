import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';

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
       <Lista/>
    </div>
  );
}

export default App;
