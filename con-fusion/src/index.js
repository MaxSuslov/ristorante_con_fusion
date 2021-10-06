import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module'
import ReactPiwik from 'react-piwik';

const tagManagerArgs = {
    gtmId: 'GTM-WQZM8ZN'
}
TagManager.initialize(tagManagerArgs)

const piwik = new ReactPiwik({
    url: 'salesdemo.piwik.pro',
    siteId: 'abf885dc-e088-48a4-a2a7-bd4a264cf082',
  });
   
  const trackAtConnect = false;
 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
