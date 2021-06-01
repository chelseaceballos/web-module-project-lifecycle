import React from "react";
import axios from "axios";
import './App.css'
import FollowerCard from './components/FollowerCard';
import Card from './components/Card'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: [],
};} // parent

componentDidMount() { // mount/birth
  // My user information:
  // Name, login, followers, following, profile picture
  axios
  .get("https://api.github.com/users/chelseaceballos")
    .then((res) => {
      this.setState({ ...this.state, users: res.data });
})
    .catch((err) => {
    console.log(err);
});

// Followers information:
// Name & Profile Picture
axios
  .get("https://api.github.com/users/chelseaceballos/followers")
  .then((res) => {
   this.setState({ ...this.state, followers: res.data });
})
    .catch((err) => {
     console.log(err);
});}

render() {
  return (
  <div>
    <Card users={this.state.users} />
      {this.state.followers &&
         this.state.followers.map((follower) => {
         return <FollowerCard key={follower.id} follower={follower} />;
  })}
</div>
);
}}
export default App
