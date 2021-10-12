import React from 'react';

import './StoryComponentList.css';

const StoryComponentList = (props) => {
  let date = new Date(props.comment.time * 1000);
  let datePosted = date.toISOString().split('T')[0];


  return (
    <div className="card">
      <div className="grid-container">
        <h3>{props.comment.by}</h3>
        <p>{datePosted}</p>
      </div>
      <span>{props.comment.text}</span>
    </div>
     
  )
}

export default StoryComponentList;