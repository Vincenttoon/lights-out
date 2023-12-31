import './App.css';
import Title from './components/Title/Title';
import Board from './components/Board/Board';

const App = () =>
    <div className="App">
      <Title/>
      <Board size={5}/>
    </div>

export default App;
