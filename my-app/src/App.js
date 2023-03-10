import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Greetings></Greetings>
        </p>
      </header>
    </div>
  );
}

export default App;
