import React, {useState, useEffect} from 'react'
import '../App.css'
import socketIOClient from 'socket.io-client'

const ENDPOINT = process.env.REACT_APP_SERVER_PATH
let logIn = socketIOClient(ENDPOINT.concat('logIn'))

function Game(){
	const [userName, changeUserName] = useState('')
	const [roomCode, changeRoomCode] = useState('')
	const [password, changePassword] = useState('')
	const [loggedIn, toggleLoggedIn] = useState(false)

	const handleSubmit = (evt) => {
		evt.preventDefault()
		console.log('submitting')
		logIn.emit('joinRoom', {
			usr: userName,
			room: roomCode,
			pwd: password
		})
	}

	useEffect(() => {
		logIn.on('success', (msg) => {
			toggleLoggedIn(true)
			console.log('RECIEVED', msg)
		})

		logIn.on('err', (msg) => {
			console.log('ERROR', msg)
		})
	}, [])

	if(!loggedIn){
		return(
			<div className="LogInForm">
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input 
							type='text' 
							value={userName}
							onChange={e=>changeUserName(e.target.value)}
						/>
					</label>
					<br></br>
					<label>
						Room Code:
						<input 
							type='text' 
							value={roomCode}
							onChange={e=>changeRoomCode(e.target.value)}
						/>
					</label>
					<br></br>
					<label>
						Room Password:
						<input 
							type='text' 
							value={password}
							onChange={e=>changePassword(e.target.value)}
						/>
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		)
	}
	else{
		return(
			<div className="LogInForm">
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input 
							type='text' 
							value={userName}
							onChange={e=>changeUserName(e.target.value)}
						/>
					</label>
				</form>
			</div>
		)
	}
}

export default Game