import React, { useState } from 'react'
import './App.css';
import RandButton from './Button'
import MultiButton from './MultiButton'
import Popup from './Popup'
import Memes from './KillerQueen.jpg'
import Hover from './Hoverpopup'
import Map from './Map'
import DevDraw from './DrawArea'
import Draggable from 'react-draggable';
import { Button, ButtonGroup, Box, Paper } from '@material-ui/core';


function App() {
    const [responce, setResponce] = useState('')

    return (
        <div className="App">
            <DevDraw />
            <h1><Popup Title={'Thomas'} Content={[<div className="Popup"> <h1>Is a Tall boi</h1> <h1>Should stop stabbing people</h1> <h1>RIP Pig</h1> <img src={Memes} alt="Memes" /> </div>]} /> </h1>
            <p className='buttons'><Hover Holder={[<RandButton Number={20} Bonus={1} Words={'Dexterity'} />]} Content={[<div className="Popup"> <h1>Dexterity is the stat for all menuevers that require percision and accuracy. Roll this for all of you rolling needs blah blah blah blah blah</h1> </div>]} /> </p>
            <RandButton Number={20} Bonus={1} Words={'Strength'} />
            <MultiButton />
            <p>It's <time dateTime={responce}>{responce}</time></p>
            <p className='buttons'><Hover Holder={'Townhall'} Content={[<div className="Popup"> <h1>This is the hall for the town</h1> </div>]} /></p>
            <p className='buttons'><Hover Holder={[<MultiButton />]} Content={[<div className="Popup"> <h1>To just roll a number with no bonuses</h1> </div>]} /></p>
            <Draggable className="App">
                <Paper variant="outlined" elevation={3} className='paper'>
                    <RandButton Number={10} Bonus={1} Words={'Wack it'} />
                    <RandButton Number={10} Bonus={1} Words={'Smack it'} />
                    <RandButton Number={10} Bonus={1} Words={'Spell attack it'} />
                </Paper>
            </Draggable>
        </div>
    );
}

export default App;
