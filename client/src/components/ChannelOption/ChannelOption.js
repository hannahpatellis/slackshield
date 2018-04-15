import React from "react"

const ChannelOption = props => (
    <button type="button" className={"list-group-item list-group-item-action " + (this.props.activePage ? props.name : 'active')} data-channelname={props.name} onClick={props.handleChannelSelection}>#{props.name}</button>
)

export default ChannelOption