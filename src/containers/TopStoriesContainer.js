import React, { Component } from 'react';
import axios from 'axios';
import StoryComponentList from '../components/StoryComponentList';

class TopStoriesContainer extends Component {

   constructor(props){
     super(props);
     this.state = {
       topStories: []
     }
   }

  componentDidMount(){
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => {
        let top = res.data.slice(0, 25);
        top.map((id) => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((story) => {
            this.setState((currentState) => {
              currentState.topStories.push(story.data);
              return {
                topStories: currentState.topStories
              }
            })
          })
          .catch((err) => {
            console.error(err);
          })

        })
        
      })
      .catch((err) => {
        console.error(err);
      })

  }

  render() {
    let topStories = this.state.topStories;
    console.log(this.state.topStories);
    return (
      <div className="flex-container">
        { topStories.map(story => {
          return (
            <StoryComponentList story={story} key={story.id} />
          )
        })}
      </div>
    );
  }
}

export default TopStoriesContainer;