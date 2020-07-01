import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';
import RandButton from './Button'

function MultiButton() {
    const [showRolls, setShowRolls] = useState(false)

    function RollOption() {
        if (showRolls === true) {
            setShowRolls(false);
        }
        else {
            setShowRolls(true);
        }
    }

    return (
        <div>
            {showRolls
                ? <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <h1><RandButton Number={4} Bonus={0} /></h1>
                    <h1><RandButton Number={6} Bonus={0} /></h1>
                    <h1><RandButton Number={10} Bonus={0} /></h1>
                    <h1><RandButton Number={12} Bonus={0} /></h1>
                    <h1><RandButton Number={20} Bonus={0} /></h1>
                </ButtonGroup>
                : null
            }
            <h5> <Button variant="outlined" onClick={() => RollOption()}> Roll </Button> </h5>
        </div>
    );
}
export default MultiButton;