import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/* 1-Note you will need to import styles from './styles/index.css' */
import './styles/index.css'

/* 2-Note you will need to import App component*/
import App from './App.js'

const userNames = [
  'Berenice',
  'Checo',
  'Nosh',
  'Sandra',
  'Roberto',
  'Israel',
  'Perla'
]

const submissionsDataSet = [
  {author: 'Sherry', workTitle: 'Swan Dive', imageNum: 931 },
  {author: 'Julia', workTitle: 'Intellgent Conversations', imageNum: 777 },
  {author: 'William', workTitle: 'Sweet Coconut Dreams', imageNum: 810 },
  {author: 'Abigail', workTitle: 'Shark Fin Hat', imageNum: 631 }
]


ReactDOM.render(
  <App namesList={userNames} submissionsList={submissionsDataSet}/>,
  document.getElementById('root')
);
registerServiceWorker();
