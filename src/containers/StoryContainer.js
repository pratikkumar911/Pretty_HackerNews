import React, { Component } from 'react';
import axios from 'axios';
import CommentComponent from './../components/CommentComponent';

class StoryComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      story: {},
      comments: [],
    }
  }

  componentDidMount(){
    let story_id = this.props.match.params.story_id;

    axios.get(`https://hacker-news.firebaseio.com/v0/item/${story_id}.json?`)
      .then((story) => {
        console.log(story.data);

        this.setState({
          story: story.data
        });

        this.state.story.kids.map((commentId) => {
          this.getRootChildren(commentId);
        })
      })
      .catch(err => console.error(err))
  }

  getRootChildren = (id) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((story) => {
      this.setState((currentState) => {
        currentState.comments.push(story.data);
        return {
          comments: currentState.comments
        }
      })
    })
      .catch(err => console.error(err))
  }


  render() {
    let story_id = this.props.match.params.story_id;
    console.log(story_id);
    return (
      <div>
        <h2>{ this.state.story ? this.state.story.title : null}</h2>
        <hr />
        <ul>

        {this.state.comments.map(comment => {
          return (
            <CommentComponent comment={comment} key={comment.id}></CommentComponent>
          )
        })}
        </ul>
        
      </div>
    )
  }
}

export default StoryComponent;