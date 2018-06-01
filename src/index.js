import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/* 1-Note you will need to import styles from './styles/index.css' */
/* 2-Note you will need to import App component*/

ReactDOM.render(<p style={{color: '#aaa'}}>Import App Component</p>, document.getElementById('root'));
registerServiceWorker();
