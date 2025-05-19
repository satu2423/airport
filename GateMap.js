import React from 'react';
import './GateMap.css';
import { useNavigate } from 'react-router-dom';

const GateMap = ({ gates }) => {
  return (
    <div className="gate-map">
      <div className="map-container">
        {/* Main Road Connections */}
        <div className="road western-express">Western Express Highway</div>
        <div className="road sahar-road">Sahar Road</div>

        {/* Terminal Buildings */}
        <div className="terminal t1">
          <h3>Terminal 1</h3>
          <p>Domestic Flights</p>
          <div className="terminal-label">Gates 1A-1C</div>
        </div>
        
        <div className="terminal t2">
          <h3>Terminal 2</h3>
          <p>International & Domestic Flights</p>
          <div className="terminal-label">Gates 2A-2F</div>
        </div>
        
        <div className="terminal cargo">
          <h3>Cargo Terminal</h3>
          <p>Cargo Operations</p>
          <div className="terminal-label">Gates C1-C2</div>
        </div>
      </div>
    </div>
  );
};

export default GateMap;