import React, {useState, useEffect} from 'react'
import './App.css';
import Chat from './Chat/Chat'

function ColeTest() {
    const [responce, setResponce] = useState('')
    const [showRolls, setShowRolls] = useState(false)

    return (
        <div className="App">
            <Chat list={[]}/>
        </div>
    );
}

export default ColeTest;