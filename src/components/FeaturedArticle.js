import React, { Component } from 'react';


class FeaturedArticle extends Component {
  render() {
    return (
      <div className="FeaturedArticle">
        <img src={this.props.imgLink}/>
        <h3>{this.props.articleTitle}</h3>
        <p>Engage dark social and finally create actionable insights. Repurpose key demographics in order to get buy in. Generating user stories so that we create synergy. Amplifying stakeholder management and possibly create actionable insights. Create relevant and engaging content but create actionable insights. Growing brand ambassadors and finally be on brand.</p>
      </div>
    );
  }
}

export default FeaturedArticle
