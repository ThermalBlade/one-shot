import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function RandButton(props) {
    function Roll() {
        const min = 1;
        const max = props.Number;
        const rand = Math.random() * (max - min + 1) + min;
        console.log(Math.floor(rand)+props.Bonus);
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => Roll()}> Roll 1d{props.Number} </Button>
        </div>
    );
}
export default RandButton;