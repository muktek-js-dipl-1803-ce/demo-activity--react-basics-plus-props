import React, { Component } from 'react';
import Title from './components/Title'
import topContributorsImg from './images/top-contributors.svg'
import recentSubmissionsImg from './images/recent-submissions.svg'
import featuredArticle from './images/featured-article.svg'

/* note, you will need to import FeaturedArticle component*/

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          /* Example */
        }

        <Title>
          <img src={featuredArticle}/> Featured Article
        </Title>

        {
          /* FeaturedArticle Component Below */
        }

        {
          /* Top Contributors <Title> component below */
        }

        {
          /* Recent Submissions <Title> component below */
        }



      </div>
    );
  }
}

export default App;
