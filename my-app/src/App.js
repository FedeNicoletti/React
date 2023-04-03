import logo from './logo.svg';
import './App.css';
/* import Greetings from './components/pure/Greetings';
import GreetingsF from './components/pure/GreetingsF'; */
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  <Greetings name="Federico"></Greetings> */}
        {/*  <GreetingsF name="Federico"></GreetingsF> */}
      <TaskListComponent></TaskListComponent>
      
      </header>
    </div>
  );
}

export default App;
