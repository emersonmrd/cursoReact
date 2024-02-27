import './App.css';
import Evento from './components/Evento';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
    <h1>Testando Eventos </h1>
    <Evento numero="1"></Evento>
    <Evento numero="2"></Evento>
    <Form></Form>
    </div>
  );
}

export default App;
