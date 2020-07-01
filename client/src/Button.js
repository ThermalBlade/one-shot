import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function RandButton(props) {
    const [RollNum, setRollNum] = useState(null)
    function Roll() {
        const min = 1;
        const max = props.Number;
        const rand = Math.random() * (max - min + 1) + min;
        console.log(Math.floor(rand) + props.Bonus);
        setRollNum(Math.floor(rand) + props.Bonus)
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => Roll()}> {props.Words ? props.Words : 'Roll 1d' + props.Number} </Button>
            <h5> {RollNum} </h5>
        </div>
    );
}
export default RandButton;