var React = require('react');
var ReactDom = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var App = require('./components/App.jsx');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById("app")
);
