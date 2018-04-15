import React, { Component } from "react"

import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar"
import ChannelOption from "../../components/ChannelOption"

import "./Home.css"

class Home extends Component {

  state = {
    activePage: ""
  }

  handleChannelSelection = e => {
    console.log("thing" + this.state.activePage)
    console.log(e.target.getAttribute('data-channelname'))
    // this.setState({activePage:e.target.getAttribute('data-channelname')})
    
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row mt-5">
            <SideBar>
              <ChannelOption name="something" handleChannelSelection={this.handleChannelSelection} activePage={this.state.activePage} />
              <ChannelOption name="somethingelse" handleChannelSelection={this.handleChannelSelection} activePage={this.state.activePage} />
              <ChannelOption name="somethingdifferent" handleChannelSelection={this.handleChannelSelection} activePage={this.state.activePage} />
            </SideBar>

            <div className="col">
              <div className="card border-warning mb-3">
                <div className="card-header">#sav-instructions</div>
                <div className="card-body text-warning">
                  <div className="time-header">
                    <center>
                      <p className="lead">Tuesday, January 4th 2018</p>
                    </center>
                  </div>
                  <div className="alert alert-secondary" role="alert">
                    <strong>Hannah Patellis</strong> <small>12:32 pm</small>
                    <hr />
                    <p>omg that is so funny</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
