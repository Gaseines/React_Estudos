import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Gabriel'

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Olá, {name}</p>
      <p>soma: {sum(5, 5)}</p>
      <img src={url} alt="" />
      <HelloWorld/>
    </div>
  );
}

export default App;
