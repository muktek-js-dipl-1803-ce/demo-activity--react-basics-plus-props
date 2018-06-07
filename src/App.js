import React, { Component } from 'react';
import Title from './components/Title'
import User from './components/User.js'
import Submission from './components/Submission.js'

import FeaturedArticle from './components/FeaturedArticle.js'
import topContributorsImg from './images/top-contributors.svg'
import recentSubmissionsImg from './images/recent-submissions.svg'
import featuredArticleImg from './images/featured-article.svg'


class App extends Component {

  _generateUserJsx(){
    const userArrayJsx = this.props.namesList.map(function(nameStr){
          return <User theUserStr={nameStr} />
      })

    return userArrayJsx
  }

  _generateSubmissionsJsx(){
    // INSTRUCTOR NOTE: -- We passed this value in index.js

    const submissionsArrayJsx = this.props.submissionsList.map(function(submissionObj){
      // console.log(submissionObj)

      // INSTRUCTOR NOTE: -- Values of attributes are accessed as this.props.«propName»
      // on the the component

      return (
        <Submission
          author={submissionObj.author}
          title={submissionObj.workTitle}
          imgNum={submissionObj.imageNum}
        />
      )
    })

    return submissionsArrayJsx
  }

  render() {
    console.log(this.props.namesList)
    return (
      <div className="App">
        {/* Example */}
        <Title>
          <img src={featuredArticleImg}/> Featured Article
        </Title>
        <FeaturedArticle
          articleTitle="Happy React Days"
          imgLink="https://picsum.photos/900/500?image=248"
        />


        <Title> <img src={topContributorsImg}/> Top Contributors </Title>

        <div className="content-container">
          {/* generate an array of <User> components */}
          { this._generateUserJsx() }
        </div>

        <Title>
          <img src={recentSubmissionsImg}/> Recent Submissions
        </Title>

        <div className="content-container">
          {/* Generate an array of <Submission> components ... and render data from an array of objects */}
          {  this._generateSubmissionsJsx()    }
        </div>


      </div>
    );
  }
}

export default App;
