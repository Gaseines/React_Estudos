import logo from './logo.svg';
import './App.css';
import Chalenge from './components/Chalenge';
import UserDetails from './components/sub_Components/UserDetails';

function App() {
  return (
    <div className="App">
      {/* Desafio 1 */}
      <h1>Chalenge</h1>
      <Chalenge />
      <hr />
      {/* Desafio 4 */}
      <h1>Desafio 4</h1>
      <UserDetails />
      <hr />
    </div>
  );
}

export default App;
