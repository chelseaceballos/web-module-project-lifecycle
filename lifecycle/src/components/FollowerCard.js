import React, { Component } from "react";

class FollowerCard extends Component {

render() {
    const { follower } = this.props;
    return (
<div>
    <img src={follower.avatar_url} alt="follower avatar" />
    <p className='follower'>Follower's Username: {follower.login}</p>
</div>
);}}
export default FollowerCard