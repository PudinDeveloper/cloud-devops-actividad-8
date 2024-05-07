import './App.css';
import { useState } from 'react';

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// const name = import.meta.env.VITE_NAME || 'Fulanito de Tal';
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="azure.png" className="App-logo" alt="logo" />
        <p>
          <div>I love Azure<span className="heart"> ♥️ </span></div>
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p className="small">
          Actividad 8 propuesta por Carla Rodriguez y Diego Gentner.
        </p>

      </header>
    </div>
  );
}

export default App;
