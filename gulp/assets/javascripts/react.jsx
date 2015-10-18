var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');

var helloMsg = React.createClass({
  render: function(){
    return (
      <h1> Hello, world! </h1>
    )
  }
});

function stuff(){
  React.render((
    <ReactRouter.Router>
      <ReactRouter.Route path="/" component={helloMsg}/>
    </ReactRouter.Router>
  ), document.getElementById('react'))
}

window.addEventListener("DOMContentLoaded",stuff);
module.exports=helloMsg;
