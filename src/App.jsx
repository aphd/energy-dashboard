// import { useState } from 'react';
import './App.css';
import React from 'react'
import Header from './components/header';
import Dashboard from './components/dashboard';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className="container">
            <Header></Header>
            <Dashboard></Dashboard>
        </div>
    );
}

export default App;

