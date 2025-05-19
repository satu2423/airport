import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GateNavigation.css';
import GateMap from './GateMap';

const GateNavigation = () => {
  const navigate = useNavigate();
  
  const [gates, setGates] = useState([
    // Terminal 1 (Domestic)
    { id: 1, number: '1A', terminal: 'T1', status: 'Available', type: 'Domestic' },
    { id: 2, number: '1B', terminal: 'T1', status: 'Occupied', type: 'Domestic' },
    { id: 3, number: '1C', terminal: 'T1', status: 'Available', type: 'Domestic' },
    
    // Terminal 2 (International & Domestic)
    { id: 4, number: '2A', terminal: 'T2', status: 'Available', type: 'International' },
    { id: 5, number: '2B', terminal: 'T2', status: 'Occupied', type: 'International' },
    { id: 6, number: 'C1', terminal: 'Cargo', status: 'Available', type: 'Cargo' },
  ]);

  const [filters, setFilters] = useState({
    terminal: 'all',
    status: 'all',
    type: 'all'
  });

  const filteredGates = gates.filter(gate => {
    return (
      (filters.terminal === 'all' || gate.terminal === filters.terminal) &&
      (filters.status === 'all' || gate.status === filters.status) &&
      (filters.type === 'all' || gate.type === filters.type)
    );
  });

  const handleGateSelect = (gate) => {
    navigate(`/directions/${gate.number}`);
  };

  return (
    <div className="gate-navigation">
      <div className="side-panel">
        <h1>Mumbai Airport Gate Navigation</h1>
        
        <div className="filters">
          <select
            value={filters.terminal}
            onChange={(e) => setFilters({ ...filters, terminal: e.target.value })}
          >
            <option value="all">All Terminals</option>
            <option value="T1">Terminal 1 (Domestic)</option>
            <option value="T2">Terminal 2 (International)</option>
            <option value="Cargo">Cargo Terminal</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="all">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="all">All Types</option>
            <option value="International">International</option>
            <option value="Domestic">Domestic</option>
            <option value="Cargo">Cargo</option>
          </select>
        </div>

        <div className="gates-grid">
          {filteredGates.map(gate => (
            <div 
              key={gate.id} 
              className={`gate-card ${gate.status.toLowerCase()}`}
              onClick={() => handleGateSelect(gate)}
            >
              <h2>Gate {gate.number}</h2>
              <p>Terminal: {gate.terminal}</p>
              <p>Status: {gate.status}</p>
              <p>Type: {gate.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="map-section">
        <GateMap gates={filteredGates} />
      </div>
    </div>
  );
};

export default GateNavigation;