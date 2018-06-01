import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div className="Title">
        <h5>{this.props.children}</h5>
        <hr/>
      </div>
    );
  }
}

export default Title
