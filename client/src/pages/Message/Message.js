import React from 'react'


const Message = ({
  date,
  time,
  channel,
  user,
  message
}) => (
<div className="card border-warning mb-3">
  <div className="card-header">{channel}</div>
  <div className="card-body text-warning">
    <div className="time-header">
      <center>
        <p className="lead">{date}</p>
      </center>
    </div>
    <div className="alert alert-secondary" role="alert">
      <strong>{user}</strong> <small>{time}</small>
      <hr />
      <p>{message}</p>
    </div>
  </div>
</div>
);

export default Message;