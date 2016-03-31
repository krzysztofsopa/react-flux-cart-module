var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConsts = require('../consts/ActionConsts');

var CartActions = {
  addToCart: function (product, quantity) {
    AppDispatcher.dispatch({
      actionType: ActionConsts.ADDED_TO_CART,
      product: product,
      quantity: quantity
    });
  },
  removeFromCart: function (cartItem) {
    AppDispatcher.dispatch({
      actionType: ActionConsts.REMOVED_FROM_CART,
      cartItem: cartItem
    });
  }
};

module.exports = CartActions;
