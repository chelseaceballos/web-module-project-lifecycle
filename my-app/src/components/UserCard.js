import React, { Component } from 'react';

export default class UserCard extends Component {
    render() {
        const { user } = this.props;
        // const handleClick = () => {
            
        // }
        
        return (
            <div>
             <div className="img-container"> 
                <img alt="user avatar" src={user.avatar_url} />
             </div>
             <div className="user-data">
                 <h2>Name: {user.name}</h2>
                 <p>Username: {user.login}</p>
                 <p>Followers: {user.followers}</p>
                 {/* <a onClick={handleClick}>User's Repos: {user.repos_url}</a> */}

             </div>
            </div>
        )
    }
}

// user data: avatar_url, followers [1], following [1], login, name, repos_url
