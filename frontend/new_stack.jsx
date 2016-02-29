var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');



var routes = (
  <Route path="/" component={App}></Route>
);


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  var context_data = {
    team_id:root.dataset.teamId,
    user_id:root.dataset.userId,
  };
  ReactDOM.render(<Router>{
    <Route path="/" component={App} routerProps={context_data}></Route>
  }</Router>, root);
});
