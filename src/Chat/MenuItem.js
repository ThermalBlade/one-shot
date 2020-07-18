import React from 'react'

const MenuItem = ({text, selected}) => {
	return(
		<div className={`menu-item`}>
			{text}
		</div>
	)
}

export default MenuItem