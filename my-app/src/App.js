import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import UserCard from './components/UserCard';
import Follower from './components/Follower';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: [] // in most cases, there would be more than one follower, that's why it's an array
    }
  };

  componentDidMount() {
axios
  .get("https://api.github.com/users/chelseaceballos")
       // user data: avatar_url, followers [1], following [1], login, name, repos_url
  .then((res)=> {
    this.setState({...this.state, user: res.data})
  })
  .catch((err)=> {
    console.log(err)
  });
axios
  .get("https://api.github.com/users/chelseaceballos/followers")
       // followers data: login, id, avatar_url
  .then((res)=> {
    // console.log(res)
    this.setState({...this.state, followers: res.data})
  })
  .catch((err)=> {
    console.log(err)
  })
  };

  render() { // render is what is onscreen
    return (
      <div>
        <h1>Chelsea's Github User Card</h1>
        <UserCard user={this.state.user}/>
        {this.state.followers &&
        this.state.followers.map((follower) => {
          return < Follower key={follower.id} follower={follower}/>
        })}
      </div>
    )
  }
}

