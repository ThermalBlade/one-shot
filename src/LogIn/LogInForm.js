import React, {useState, useEffect} from 'react'
import '../App.css'
import socketIOClient from 'socket.io-client'

const ENDPOINT = process.env.REACT_APP_SERVER_PATH
let socket = socketIOClient(ENDPOINT)
//let games = socketIOClient(ENDPOINT.concat('games'))
let chat = socketIOClient(ENDPOINT.concat('chat'))

const myusername = 'testingusername'

function LogInForm(props){
	const [sendingMessage, changeSendingMessage] = useState('')
	const [newMessage, changeNewMessage] = useState('')
	const [messages, addMessage] = useState(props.list)

	useEffect(() => {
		addMessage([
			{name: newMessage.toString()},
			...messages,
		])
	}, [newMessage])

	useEffect(() => {
		if(socket.disconnected){
			socket = socketIOClient(ENDPOINT)
		}
        socket.on('new message2', data => {
			console.log(data)
			changeNewMessage(data)
		})
        return () => socket.disconnect()
	}, [])

	/*useEffect(() => {
		games.on('welcome', (msg) => {
			console.log('RECIEVED', msg)
		})

		games.emit('joinRoom', 'rocket league')

		games.on('newUser', (res) => console.log(res))

		games.on('err', (err) => console.log(err))
		games.on('success', (res) => console.log(res))
	}, [])*/

	const handleSubmit = (evt) => {
		evt.preventDefault()
		chat.emit('newMsg', {username: myusername, msg: sendingMessage})
		changeSendingMessage('')
	}

	return(
		<div className="LogInForm">
			<form onSubmit={handleSubmit}>
				<label>
					Room Code:
					<input 
						type='text' 
						value={sendingMessage}
						onChange={e=>changeSendingMessage(e.target.value)}
					/>
				</label>
                <br></br>
                <label>
					Room Password:
					<input 
						type='text' 
						value={sendingMessage}
						onChange={e=>changeSendingMessage(e.target.value)}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	)
}

export default LogInForm