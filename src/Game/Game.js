import React, {useState, useEffect} from 'react'
import '../App.css'
import {initiateSocket, 
		disconnectSocket, 
		subscribeToChat, 
		sendMessage} 
		from '../Socket/socketFunctions'

// function Game(){
// 	const rooms = ['A', 'B', 'C']
// 	const [room, setRoom] = useState()
// 	const [message, setMessage] = useState('')
// 	const [chat, setChat] = useState([])

// 	useEffect(() => {
// 		if(room) initiateSocket(room)

// 		subscribeToChat((err, data) => {
// 			if(err) return

// 			setChat(oldChats =>[data, ...oldChats])
// 		})

// 		return () => {
// 			disconnectSocket()
// 		}
// 	}, [room])

// 	return (
// 		<div>
// 		  	<h1>Room: {room}</h1>
// 		  	{ rooms.map((r, i) =>
// 				<button onClick={() => setRoom(r)} key={i}>{r}</button>)
// 			}
// 		  	<h1>Live Chat:</h1>
// 		  	<input type="text" name="name" value={message}
// 			onChange={e => setMessage(e.target.value)} />
// 		  	<button onClick={()=> sendMessage(room,message)}>Send</button>
// 		  	{ chat.map((m,i) => <p key={i}>{m}</p>) }
// 		</div>
// 	  );
// }

// export default Game



function Game(){
	const [userName, changeUserName] = useState('')
	const [roomCode, changeRoomCode] = useState('')
	const [password, changePassword] = useState('')

	const handleSubmit = (evt) => {
		evt.preventDefault()
		if(roomCode && userName && password){
			initiateSocket(roomCode, userName, password)
		}
	}

	useEffect(() => {
		return () => {
			disconnectSocket()
		}
	}, [])

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

export default Game