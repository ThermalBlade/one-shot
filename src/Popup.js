import React, { useState } from 'react';
import './App.css';
import Memes from './KillerQueen.jpg';
import { Button, Popover } from '@material-ui/core';


function Popup(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(){
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                {props.Title}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {props.Content}
            </Popover>
        </div>
    );
}
export default Popup;