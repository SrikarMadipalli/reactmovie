/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'mdbootstrap/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'mdbootstrap/js/mdb.min.js';
import jQuery from 'jquery';
window.jQuery = jQuery;

// import './scss/index.scss';
import './index.css'
import App from './components/App';

ReactDOM.render(<App/>,document.getElementById('app'));