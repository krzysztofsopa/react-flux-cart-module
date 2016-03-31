var _ = require('underscore');
var React = require('react');

var CartItemView = require('./CartItem.react');
var CartManager = require('../services/cart/CartManager');

var CartView = React.createClass({
  getCartProducts: function () {
    return this.props.cartProducts;
  },
  render: function () {
    var cartProducts = this.getCartProducts();
    var self = this;
    return (
      <div className="cart-holder">
        {Object.keys(cartProducts).map(function(key){
          return (
            <CartItemView key={key} cartProduct={cartProducts[key]}/>
          )
        })}
        {(function() {
            if (self.getCartProducts().length > 0) {
              return (
                <div className="cart-summary">
                  Cart total: ${CartManager.getCartTotal()}
                </div>
              )
            }
        })()}
      </div>
    );
  }
});

module.exports = CartView;
