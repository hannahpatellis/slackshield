import React, { Component } from "react"
import Message from '../Message'
import API from "../../utils/API";

class Home extends Component {
  state = { messages: [] }

  componentDidMount() {
  	API.getAllMessages(true).then(res => this.setState({ messages: res.data }))
  }

  render() {
    return (
      <div>
        <h1>Welcome to SlackShield</h1>
      {this.state.messages.map(message => (
      	<Message
      		key={message.token}
      		{...message}
      	/>
      ))}
      </div>
    )
  }
}

export default Home
