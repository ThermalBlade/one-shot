import React, { useState } from 'react';
import './App.css';
import { Popover, Typography } from '@material-ui/core';


function Hoverpopup(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleClick}
                onMouseLeave={handleClose}
            >
                {props.Holder}
            </Typography>
            <Popover
                id="mouse-over-popover"
                className='Hoverover'
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                disableRestoreFocus
            >
                {props.Content}
            </Popover>
        </div>
    );
}
export default Hoverpopup;