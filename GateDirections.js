import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GateDirections.css';

const GateDirections = () => {
  const { gateNumber } = useParams();
  const navigate = useNavigate();

  const getDirections = (gateNumber) => {
    const baseDirections = {
      'T1': [
        "From Sahar Road entrance:",
        "1. Enter Terminal 1 building",
        "2. Pass through security check",
        "3. Take the escalator to Departure Level",
        "4. Follow signs for Gates 1A-1C"
      ],
      'T2': [
        "From Western Express Highway:",
        "1. Follow signs to Terminal 2",
        "2. Enter through Level 4 departure",
        "3. Clear immigration for international flights",
        "4. Take the internal shuttle if needed",
        "5. Follow digital displays for gate numbers"
      ],
      'Cargo': [
        "From Air Cargo Complex entrance:",
        "1. Take Cargo access road",
        "2. Follow signs to Cargo Terminal",
        "3. Check in at cargo reception",
        "4. Use internal cargo area transport"
      ]
    };

    const gateSpecificDirections = {
      '1A': "Located at the start of Terminal 1 wing",
      '1B': "Middle section of Terminal 1",
      '1C': "End section of Terminal 1 wing",
      '2A': "North wing of Terminal 2, Level 4",
      '2B': "North-central section, near duty free",
      '2C': "Central area, near food court",
      '2D': "South-central section",
      '2E': "South wing, near airline lounges",
      '2F': "Far south wing of Terminal 2",
      'C1': "Main cargo handling area",
      'C2': "Special cargo processing zone"
    };

    const terminal = gateNumber.startsWith('1') ? 'T1' : 
                    gateNumber.startsWith('2') ? 'T2' : 'Cargo';

    return {
      main: baseDirections[terminal],
      specific: gateSpecificDirections[gateNumber]
    };
  };

  const directions = getDirections(gateNumber);

  return (
    <div className="directions-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Map
      </button>
      <h1>Directions to Gate {gateNumber}</h1>
      <div className="directions-content">
        <h2>Main Directions</h2>
        <ul>
          {directions.main.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <h2>Gate Specific Information</h2>
        <p>{directions.specific}</p>
      </div>
    </div>
  );
};

export default GateDirections;