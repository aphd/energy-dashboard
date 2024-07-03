// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import React from 'react'

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="header">
                <h1>Energy Community Dashboard</h1>
                <p>Real-time data for sustainable energy management</p>
            </div>
            <div className="dashboard">
                <div className="widget">
                    <h2>Energy Consumption</h2>
                    <p>Current: 100 kW</p>
                    <p>Yesterday: 95 kW</p>
                </div>
                <div className="widget">
                    <h2>Solar Power Generation</h2>
                    <p>Current: 50 kW</p>
                    <p>Yesterday: 45 kW</p>
                </div>
                <div className="widget">
                    <h2>Battery Storage</h2>
                    <p>Capacity: 200 kWh</p>
                    <p>Remaining: 150 kWh</p>
                </div>
                <div className="widget">
                    <h2>Energy Savings</h2>
                    <p>CO2 Saved: 500 kg</p>
                    <p>Cost Saved: $100</p>
                </div>
            </div>
        </div>
    );
}

export default App;

