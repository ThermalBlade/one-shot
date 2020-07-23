import React, { useState, useEffect, useRef } from 'react'
import '../App.css'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import socketIOClient from 'socket.io-client'

import Menu from './Menu'
import Arrow from './Arrow'

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' })
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })
const maxMessages = 50

const ENDPOINT = 'http://localhost:4000'
const socket = socketIOClient(ENDPOINT);

function Chat(props){
	const [messages, addMessage] = useState(props.list)
	const [response, setResponse] = useState("")

	useEffect(() => {
		console.log('using effect')
        socket.on('new message2', data => {
			console.log('b', messages)
			//shit is broke in props here
			add2(data)
            setResponse(data)
        })
        return () => socket.disconnect()
	}, [])
	
	function add(){
		const n = Math.random().toString()
		socket.emit('new message', n)
		// addMessage([
		// 	{name: n},
		// 	...messages
		// ])
	}
	function add2(d){
		addMessage([
			{name: d.toString()},
			...messages,
			'hb',
			'aa'
		])
		console.log(messages)
	}

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
			<button onClick={add}>Add</button>
			<h1>{response}</h1>
		</div>
	)
}

export default Chat