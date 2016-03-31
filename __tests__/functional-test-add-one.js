var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var FluxCartApp = require('../js/components/FluxCartApp.react');

describe('Flux Cart App Functional Tests', function() {
  it('Test add one item to cart', function() {
    var app =  TestUtils.renderIntoDocument(
      <FluxCartApp />
    );

    var quantityInputs = TestUtils.scryRenderedDOMComponentsWithClass(app, 'quantity');
    var addToCartButtons = TestUtils.scryRenderedDOMComponentsWithClass(app, 'add-to-cart-button');

    TestUtils.Simulate.click(addToCartButtons[0]);

    var cartItemQuantities = TestUtils.scryRenderedDOMComponentsWithClass(app, 'cart-item__quantity');
    expect(parseInt(cartItemQuantities[0].textContent)).toEqual(1);
    expect(_.isUndefined(cartItemQuantities[1])).toEqual(true);
    expect(_.isUndefined(cartItemQuantities[2])).toEqual(true);
    expect(_.isUndefined(cartItemQuantities[3])).toEqual(true);
  });
});
