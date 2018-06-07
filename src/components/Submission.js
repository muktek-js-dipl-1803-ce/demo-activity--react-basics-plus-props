import React, { Component } from 'react';


class Submission extends Component {
  render() {
    // INSTRUCTOR NOTE: -- We access data through this.props.«propName»
    return (
      <div className="Submission">
        <img
          src={`https://picsum.photos/600/800?image=${this.props.imgNum}`}
        />
        <h6>{this.props.author}</h6>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Submission
