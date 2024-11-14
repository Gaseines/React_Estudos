import './App.css';
import ListRender from './components/ListRender';
import Renderizacao from './components/Renderizacao';
import PropsCarDetails from './components/PropsCarDetails';
import { useState } from 'react';
import FunctionPai from './components/FunctionPai';
import Message from './components/Message';
import ChengeMessage from './components/ChengeMessage';

function App() {

  const [funcionarios] = useState([
    { id: 1841566, name: "Gabriel", age: 21 },
    { id: 2652652, name: "Luiza", age: 22 },
    { id: 6892132, name: "Mariana", age: 8 }
  ])

  const handleFunctionPai = () => {
    console.log("Funcção pai foi ativada")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <ListRender />
      <Renderizacao />
      {funcionarios.map((funcionario) => (
        <PropsCarDetails
          key={funcionario.id}
          nome={funcionario.name}
          id={funcionario.id}
          idade={funcionario.age} />
      ))}
      {/* Executar Função */}
      <FunctionPai myFunction={handleFunctionPai} />

      {/* State Lift */}
      <Message msg={message} />
      <ChengeMessage handleChengeMessage={handleMessage} />
    </div>
  );
}

export default App;
