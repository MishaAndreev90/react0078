import React from 'react';
import './App.css';
import Item from './components/Item'; // Импорт компонента Item

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Мои загадки</h1>
      </header>
      <div className="App-content">
        <Item /> {/* Использование компонента Item */}
      </div>
    </div>
  );
}

export default App;