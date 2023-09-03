import React from 'react';
import './App.css';
import Country from './components/CountryList';
import Number from './components/NumberList';

function App() {
  return (
    <div className="App">
      <h1>Country</h1>
      <Country />
      <h2> Number</h2>
      <Number />
    </div>
  );
}

export default App;
