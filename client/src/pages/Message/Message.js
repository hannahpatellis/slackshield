import React, { Component } from "react"
import "./Message.css";

const Message = props => (
	<div className='message'>
		<div className='message-time'>
			{props.time}
		</div>
		<div className='message-text'>
			<span className='user'>{props.user}:</span> {props.text}
		</div>
	</div>
)

export default Message
