var React = require('react');
var FluxCartApp = require('./components/FluxCartApp.react');
var CartStore = require('./stores/CartStore');

React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
