import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavbarComponent from './navbar';
import ListComponent from './list';

ReactDOM.render(<NavbarComponent />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ListComponent />, document.getElementById('family'));
registerServiceWorker();
