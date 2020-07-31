import React, {useState} from 'react'
import '../App.css';
import LogInForm from './LogInForm'

function LogInPage() {

    return (
        <div className="LogInPage">
            <LogInForm list={[]}/>
        </div>
    );
}

export default LogInPage;