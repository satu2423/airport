import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GateNavigation from './components/GateNavigation';
import GateDirections from './components/GateDirections';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GateNavigation />} />
          <Route path="/directions/:gateNumber" element={<GateDirections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
