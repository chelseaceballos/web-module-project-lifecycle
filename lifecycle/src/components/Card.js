import React from "react";
 class Card extends React.Component {
  componentDidMount() {
    console.log("card component mounted");
  }

render() {
    const { users } = this.props;
    console.log(users);
    return (
<div>
    <div className="image-container">
    <img alt="user avatar" src={users.avatar_url} />
</div>
    <div className="user-info">
        <h3>User's Name: {users.name}</h3>
        <p>Username: {users.login}</p>
        <p>Following Me: {users.followers}</p>
        <p>Who I Follow: {users.following}</p>
</div>
</div>
);}}
export default Card