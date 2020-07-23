import React, { useState, useEffect, useRef } from 'react'
import '../App.css'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import socketIOClient from 'socket.io-client'

import Menu from './Menu'
import Arrow from './Arrow'

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' })
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })
const maxMessages = 4

const ENDPOINT = 'http://localhost:4000'
const socket = socketIOClient(ENDPOINT);

function Chat(props){
	const [newMessage, changeNewMessage] = useState('')
	const [messages, addMessage] = useState(props.list)

	const add = (m) => {
		addMessage([
			{name: m.toString()},
			...messages,
		])
	}

	function sendMessage(){
		const n = Math.random().toString()
		socket.emit('new message', n)
	}

	useEffect(() => {
		add(newMessage)
	}, [newMessage])

	useEffect(() => {
        socket.on('new message2', data => {
			console.log(data)
			changeNewMessage(data)
        })
        return () => socket.disconnect()
	}, [])

	return(
		<div className="HoriMenu">
			<ScrollMenu
				itemClass={'scrolling-items'}
				data={Menu(messages, '0', maxMessages)}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				selected={'0'}
				scrollToSelected={true}
				clickWhenDrag={true}
				useButtonRole={true}
				alignCenter={false}
			/>
			<button onClick={sendMessage}>Add</button>
		</div>
	)
}

export default Chat