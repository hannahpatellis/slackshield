import React from "react"
import "./Message.css";

const Message = props => {
	console.log('props', props)
	return (
	<div className='message'>
		<div className='message-time'>
			{props.time}
		</div>
		<div className='message-text'>
			<span className='user'>{props.user}:</span> {props.message}
		</div>
	</div>
)}

export default Message
