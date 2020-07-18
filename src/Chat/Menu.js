import React from 'react'
import MenuItem from './MenuItem'

const Menu = (message, selected, maxMessages) => {
    let menuMessages = []
    let iterations = message.length > maxMessages ? maxMessages : message.length
    for(let i = 0; i < iterations; i ++){
        menuMessages.push(<MenuItem 
            text={message[i].name}
            key={i}
            selected={selected}
        />)
    }
    return menuMessages
}

export default Menu