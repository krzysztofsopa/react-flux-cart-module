var _ = require('underscore');

var CartManager = (function() {
  var cartItems = [];

  var getCartTotal = function() {
    return _.reduce(cartItems, function(memo, cartProduct) {
      return memo + cartProduct.addedToCartQuantity * cartProduct.price;
    }, 0);
  };

  var addToCart = function (product, quantity) {
    var foundProduct = _.find(cartItems, function (cartProduct) {
      return product.id == cartProduct.id;
    });

    if (_.isUndefined(foundProduct)) {
      product.addedToCartQuantity = quantity;
      return cartItems.push(product);
    }

    foundProduct.addedToCartQuantity = foundProduct.addedToCartQuantity + quantity;
  };

  var removeFromCart = function (cartItem) {
    var index = 0;
    var item = _.find(cartItems, function(item){
      index++;

      return item.id == cartItem.id;
    });

    if (!_.isUndefined(item)) {
      return cartItems.splice(index - 1, 1);
    }
  };

  var getCartItems = function() {
    return cartItems;
  };

  var clearCart = function() {
    cartItems = [];
  };

  return {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    getCartItems: getCartItems,
    getCartTotal: getCartTotal,
    clearCart: clearCart
  }
})();

module.exports = CartManager;
