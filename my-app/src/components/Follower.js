import React, { Component } from 'react'

export default class Follower extends Component {
    render() {
        const { follower } = this.props;
        return (
        <div className="follower-data"> 
                <h4>List of Followers:</h4>           
                <img className="follower-img" alt="Followers Avatar" src={follower.avatar_url}/>  
                <p>Username: {follower.login}</p>                         
        </div>
        )
    }
}

// followers data: login, id, avatar_url