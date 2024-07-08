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
            <div className="widget">
                <h2>Tokens from Solar Power</h2>
                <p>Total Tokens: 200</p>
                <p>Today's Tokens: 20</p>
            </div>
            <div className="widget">
                <h2>Tokens from Good Behavior</h2>
                <p>Total Tokens: 150</p>
                <p>Today's Tokens: 15</p>
            </div>
            <div className="widget large">
                <h2>Increase Good Behavior</h2>
                <p>Bad Behavior: Using the washing machine during the night.</p>
                <p>Good Behavior: Use the washing machine during daylight hours to take advantage of solar power.</p>
            </div>
        </div>
    );
}

export default Dashboard;

