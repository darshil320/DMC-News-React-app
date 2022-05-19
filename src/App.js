

import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,
  Switch,  
  Route,
} from "react-router-dom"


export default class App extends Component {
  pageSize = 10;
  apikey = process.env.react_app_api_key

  state = {
    prgress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
   
        />
        <NavBar/>
      <Switch>
        <Route exact path='/'><News setProgress ={this.setProgress} apikey = {this.apikey}  key="general" pageSize={5} country="in" category="general"/></Route>
        <Route exact path='/business'><News setProgress ={this.setProgress} apikey = {this.apikey} key="business" pageSize={5} country="in" category="business"/></Route>
        <Route exact path='/entertainment'><News setProgress ={this.setProgress} apikey = {this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
        <Route exact path='/general'><News setProgress ={this.setProgress} apikey = {this.apikey} key="general" pageSize={5} country="in" category="general"/></Route>
        <Route exact path='/health'><News setProgress ={this.setProgress} apikey = {this.apikey} key="health" pageSize={5} country="in" category="health"/></Route>
        <Route exact path='/science'><News setProgress ={this.setProgress} apikey = {this.apikey} key="science" pageSize={5} country="in" category="science"/></Route>
        <Route exact path='/sports'><News setProgress ={this.setProgress} apikey = {this.apikey} key="sports" pageSize={5} country="in" category="sports"/></Route>
        <Route exact path='/technology'><News setProgress ={this.setProgress} apikey = {this.apikey} key="technology" pageSize={5} country="in" category="technology"/></Route>
      </Switch>
      </Router>
</div>
    )
  }
}

 

