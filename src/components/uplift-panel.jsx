import React from 'react';
import thumbsUpDown from '../assets/thumbs-up-down.svg';

function Uplift() {
    return (
        <div className="widget large">
            <img src={thumbsUpDown} />
            <h2>Promote Positive Behavior</h2>
            <p>Bad Behavior: Using the washing machine during the night.</p>
            <p>Good Behavior: Use the washing machine during daylight hours to take advantage of solar power.</p>
        </div>
    );
}

export default Uplift;

