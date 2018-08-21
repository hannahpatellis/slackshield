import React, { Component } from "react"

import NavBar from "../../components/NavBar"

import "./Home.css"
import Message from '../Message'
import API from '../../utils/API'

class Home extends Component {
  state = {
    messages: [],
    users: {},
    channels: {}
  }

  componentDidMount(){
    console.log('loading')
    API.initialLoad()
       .then(({data}) => this.setState({ ...data }))
      .catch(err => console.log(err));
  }

  handleChannelSelection = e => {
    console.log(e.target.getAttribute('data-channelname'))
  }

  renderChannelButtons = () => {
      let channels = [];
      for(let channel in this.state.channels){
        channels.push(
          <button 
            type="button" 
            className="list-group-item list-group-item-action active" 
            data-channelname="sav-instructions" 
            onClick={this.handleChannelSelection}
            >
          #{this.state.channels[channel]}
          </button>)
      }
      return channels;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 col-md-3">
              <div className="card text-white bg-success mb-3">
                <div className="card-header">
                  <p className="mb-0"><small>An archive of</small></p>
                  <h5 className="mt-0">gtnov2017.slack.com</h5>
                </div>
                <div>
                  <div className="list-group">
                  {this.renderChannelButtons()}
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              {this.state.messages.map(message =>(
                <Message
                   user={this.state.users[message.user].profile.real_name}
                   date={message.createdAt}
                   time={message.time}
                   channel={this.state.channels[message.channel]}
                   message={message.message}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
