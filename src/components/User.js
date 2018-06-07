import React, { Component } from 'react';


class User extends Component {
  render() {
    return (
      <div className="User">
        <img src={`https://flathash.com/${this.props.theUserStr}`}/>
        <h6>{this.props.theUserStr}</h6>
      </div>
    );
  }
}

export default User
