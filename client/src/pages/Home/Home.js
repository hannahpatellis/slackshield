import React, { Component } from "react"

import NavBar from "../../components/NavBar"

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-2">
            thing
            </div>

            <div className="col">
            thing
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
