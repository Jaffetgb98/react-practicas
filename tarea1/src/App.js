import logo from './logo.svg';
import './App.css';
import Boton from './Boton';
import Animales from './Animales'

function App() {
  return (
    <div className="App">
      <Animales/>
      <Boton cargando={true}/>
    </div>
     
  );
}

export default App;
