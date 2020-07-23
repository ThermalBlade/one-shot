import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
import App from './App'
import David from './DavidTest'
import Cole from './ColeTest'

function Dev() {
    return (
        <div className="DevPage">
            <nav>
                <Link to='/David'>David </Link>
                <Link to='/Cole'>Cole </Link>
                <Link to='/App'>App</Link>
            </nav>
            <Switch>
                <Route exact path='/David'>
                    <David />
                </Route>
                <Route exact path='/Cole'>
                    <Cole />
                </Route>
                <Route exact path='/App'>
                    <App />
                </Route>
            </Switch>
        </div>
    );
}

export default Dev;
