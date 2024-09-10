import React from 'react';
import sunToken from '../assets/sun-token.svg';
import battery from '../assets/battery.svg';
import goodToken from '../assets/good-token.svg';
import solarPower from '../assets/solar-power.png';
import charger from '../assets/charger.svg';
import saving from '../assets/saving.svg';
import Uplift from './uplift-panel';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="widget">
                <img src={charger} />
                <h2>Energy Consumption</h2>
                <p>Current: 100 kW</p>
                <p>Yesterday: 95 kW</p>
            </div>
            <div className="widget">
                <img src={solarPower} />
                <h2>Solar Power Generation</h2>
                <p>Current: 50 kW</p>
                <p>Yesterday: 45 kW</p>
            </div>
            <div className="widget">
                <img src={battery} />
                <h2>Battery Storage</h2>
                <p>Capacity: 200 kWh</p>
                <p>Remaining: 150 kWh</p>
            </div>
            <div className="widget">
                <img src={saving} />
                <h2>Energy Savings</h2>
                <p>CO2 Saved: 500 kg</p>
                <p>Cost Saved: $100</p>
            </div>
            <div className="widget">
                <img src={sunToken} />
                <h2>Tokens from Solar Power</h2>
                <p>Total Tokens: 200</p>
                <p>Today's Tokens: 20</p>
            </div>
            <div className="widget">
                <img src={goodToken} />
                <h2>Tokens from Good Behavior</h2>
                <p>Total Tokens: 150</p>
                <p>Today's Tokens: 15</p>
            </div>
            <Uplift></Uplift>
        </div>
    );
}

export default Dashboard;

