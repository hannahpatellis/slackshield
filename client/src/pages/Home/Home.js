import React, { Component } from "react"

import NavBar from "../../components/NavBar"

import "./Home.css"

class Home extends Component {

  handleChannelSelection = e => {
    console.log(e.target.getAttribute('data-channelname'))
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
                    <button type="button" className="list-group-item list-group-item-action active" data-channelname="sav-instructions" onClick={this.handleChannelSelection}>#sav-instructions</button>
                    <button type="button" className="list-group-item list-group-item-action" data-channelname="sav-livestream" onClick={this.handleChannelSelection}>#sav-livestream</button>
                    <button type="button" className="list-group-item list-group-item-action" data-channelname="anotherchannel" onClick={this.handleChannelSelection}>#anotherchannel</button>
                    <button type="button" className="list-group-item list-group-item-action" data-channelname="electronicsquids" onClick={this.handleChannelSelection}>#electronicsquids</button>
                  </div>
                </div>
              </div>
            </div>

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
