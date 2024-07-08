import React from 'react';

function Dashboard() {
    return (
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
    );
}

export default Dashboard;

