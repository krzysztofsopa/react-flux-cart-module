var _ = require('underscore');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConsts = require('../consts/ActionConsts');
var EventEmitter = require('events').EventEmitter;
var CartManager = require('../services/cart/CartManager');

var CartStore = _.extend({}, EventEmitter.prototype, {
  getCartProducts: function () {
    return CartManager.getCartItems();
  },
  emitChange: function () {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case ActionConsts.ADDED_TO_CART:
      CartManager.addToCart(
        payload.product,
        payload.quantity
      );
    break;
    case ActionConsts.REMOVED_FROM_CART:
      CartManager.removeFromCart(
        payload.cartItem
      );
    break;
  }

  CartStore.emitChange();
});

module.exports = CartStore;
