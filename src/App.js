import React from 'react';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer'
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header>
      <PortfolioContainer />

      </Header>
    </div>
  );
}

export default App;
