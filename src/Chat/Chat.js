import React, { useState, useEffect, useRef } from 'react'
import '../App.css'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import Menu from './Menu'
import Arrow from './Arrow'

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const maxMessages = 30

function Chat(props){
	const [messages, addMessage] = useState(props.list)

	function newMessage(){
		const item = {
			index: toString(messages.length),
			text: props.message
		}
		addMessage(messages.append(item))
		console.log(this.state.messages)
	}

	function add(){
		addMessage([
			{name: 'a'},
			...messages
		])
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
				//alignCenter={true}
			/>
			<button onClick={add}>Add</button>
		</div>
	)
}

export default Chat