import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import TopStoriesContainer from './containers/TopStoriesContainer';
import Header from './components/Header';
import StoryContainer from './containers/StoryContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* //Fix this sketchy code */}
        <div style={{marginTop: -25, backgroundColor: '#e2e1e0'}}>
          <Header />
          <div className="App">
            <Route exact path='/' component={TopStoriesContainer} />
            <Route path="/story/:story_id" component={StoryContainer}></Route>

          </div>

  
        </div>
      </BrowserRouter>
      
      
    );
  }
}

export default App;