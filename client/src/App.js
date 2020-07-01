import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client'
import RandButton from './Button'
import MultiButton from './MultiButton'
import { Button, ButtonGroup } from '@material-ui/core';
const ENDPOINT = 'http://localhost:4001'


function App() {
    const [flower, setFlower] = useState({})
    const [responce, setResponce] = useState('')
    const [showRolls, setShowRolls] = useState(false)

    function getFlower(){
        fetch('/flower')
            .then(response => response.json())
            .then(data => {
                setFlower(data)
        });
    }
    getFlower();

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on("FromAPI", data => {
            setResponce(data)
        })
        return () => socket.disconnect();
    }, [])

    return (
        <div className="App">
            <h1>{flower.name}</h1>
            <p>{flower.color}</p>
            <h1><RandButton Number={20} Bonus={1} Words={'Strength'} /></h1>
            <MultiButton />
            
            <p>It's <time dateTime = {responce}>{responce}</time></p>
        </div>
    );
}

export default App;
