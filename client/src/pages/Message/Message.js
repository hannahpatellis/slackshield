import React from "react"
import "./Message.css";

const Message = props => (
	<div className={`message ${props.deleted ? 'deleted' : ''}`}>
		<div className='message-time'>
			{props.time}
		</div>
		<div className='message-text'>
			<span className='user'>{props.user}:</span> {props.message}
		</div>
	</div>
)

export default Message
