import React from "react"

const SideBar = props => (
    <div className="col-12 col-md-3">
        <div className="card text-white bg-success mb-3">
            <div className="card-header">
                <p className="mb-0"><small>An archive of</small></p>
                <h5 className="mt-0">gtnov2017.slack.com</h5>
            </div>
            <div>
                <div className="list-group">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)

export default SideBar