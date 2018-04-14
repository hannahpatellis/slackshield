import React from "react"

import NavBar from "../../components/NavBar"

const NoMatch = () => (
  <div>
    <NavBar />
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12 offset-md-4 col-md-4 ">
          <div className="card bg-info text-center">
            <div className="card-header">
              <h1 className="display-1 text-white">Oops <span role="img">😟</span></h1>
            </div>
            <div className="card-body">
              <p className="text-white">The page you are looking for does not exist. Sorry about that.</p>
              <a href="/" class="btn btn-primary">Go home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NoMatch
