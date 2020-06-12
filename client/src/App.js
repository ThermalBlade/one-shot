import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [flower, setFlower] = useState({});

    function getFlower(){
        fetch('/flower')
            .then(response => response.json())
            .then(data => {
                setFlower(data)
        });
    }
    getFlower();

    return (
        <div className="App">
            <h1>{flower.name}</h1>
            <p>{flower.color}</p>
        </div>
    );
}

export default App;
