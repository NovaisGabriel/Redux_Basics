import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Exercíco React-Redux</h1>
      <div className="linha">
        <Card title="Card 1" Red>X</Card>
      </div>
      <div className="linha">
        <Card title="Card 2" Green>Y</Card>
        <Card title="Card 3" Blue>Y</Card>
        <Card title="Card 4" Purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
