import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Meetups from './meetups/meetups'
import Landing from './landing/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/meetups" component={Meetups} />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
