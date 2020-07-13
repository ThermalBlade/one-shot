import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client'
import RandButton from './Button'
import MultiButton from './MultiButton'
import Popup from './Popup'
import Memes from './KillerQueen.jpg';
import Hover from './Hoverpopup'
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
            <h1><Popup Title={'Thomas'} Content={[<div className="Popup"> <h1>Is a Tall boi</h1> <h1>Should stop stabbing people</h1> <h1>RIP Pig</h1> <img src={Memes} alt="Memes" /> </div>]} /> </h1>
            <Hover Holder={[<RandButton Number={20} Bonus={1} Words={'Dexterity'} />]} Content={[<div className="Popup"> <h1>Dexterity is the stat for all menuevers that require percision and accuracy. Roll this for all of you rolling needs blah blah blah blah blah</h1> </div>]} />
            <RandButton Number={20} Bonus={1} Words={'Strength'} />
            <MultiButton />
            <p>It's <time dateTime={responce}>{responce}</time></p>
            <Hover Holder={'Townhall'} Content={[<div className="Popup"> <h1>This is the hall for the town</h1> </div>]} />
        </div>
    );
}

export default App;
