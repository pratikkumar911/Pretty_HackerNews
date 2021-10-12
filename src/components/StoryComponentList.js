import React from 'react';
import { Link } from 'react-router-dom';

import './StoryComponentList.css';

const StoryComponentList = (props) => {
  let date = new Date(props.story.time * 1000);
  let datePosted = date.toISOString().split('T')[0];
  let comments = props.story.kids;

  return (
    <div className="card">
     <div className="grid-container">

      <div className="grid-item-1">
        <a href={props.story.url} className="title">
          <span className='title'>{props.story.title}</span>
        </a>
        <p className="posted">Posted: { datePosted }</p>
        
      </div>

      <div className="grid-item-3">
        <span className="score">{props.story.score}👍</span>
        <Link to={'/story/' + props.story.id} className="comments">
          <p className="posted">Comments ({comments ? comments.length : null})</p>
        </Link>
      </div>
      </div>
    </div>
     
  )
}

export default StoryComponentList;