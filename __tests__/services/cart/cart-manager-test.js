/*
When in package.json configuration:
  "jest": {
    "unmockedModulePathPatterns": [
      "node_modules"
    ]
  }
not include working directory, like in this case:
  "jest": {
    "unmockedModulePathPatterns": [
      "js",
      "node_modules"
    ]
  }
then we need to unmock tested modules, e.g:
  jest.unmock('underscore');
  jest.unmock('../../../js/services/cart/CartManager');
or use mocked version.
This might be hard when object dependencies are nested.
*/

var CartManager = require('../../../js/services/cart/CartManager');

describe('CartManager Tests', function() {
  beforeEach(function() {
    CartManager.clearCart();
  });

  it('CartManager addToCart', function() {
    CartManager.addToCart({id: 1, price: 10}, 10);

    expect(CartManager.getCartItems().length).toEqual(1);
    expect(CartManager.getCartTotal()).toEqual(100);
  });

  it('CartManager addToCart', function() {
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 2, price: 20}, 1);
    CartManager.addToCart({id: 3, price: 30}, 2);

    expect(CartManager.getCartItems().length).toEqual(3);
    expect(CartManager.getCartTotal()).toEqual(380);
  });

  it('CartManager removeFromCart', function() {
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 1, price: 10}, 10);
    CartManager.addToCart({id: 2, price: 20}, 1);
    CartManager.addToCart({id: 3, price: 30}, 2);

    expect(CartManager.getCartItems().length).toEqual(3);
    expect(CartManager.getCartTotal()).toEqual(380);

    CartManager.removeFromCart({id: 1, price: 10, addedToCartQuantity: 30});
    expect(CartManager.getCartItems().length).toEqual(2);
    expect(CartManager.getCartTotal()).toEqual(80);

    CartManager.removeFromCart({id: 1});
    expect(CartManager.getCartItems().length).toEqual(2);
    expect(CartManager.getCartTotal()).toEqual(80);

    CartManager.removeFromCart({id: 3});
    expect(CartManager.getCartItems().length).toEqual(1);
    expect(CartManager.getCartTotal()).toEqual(20);

    CartManager.removeFromCart({id: 2});
    expect(CartManager.getCartItems().length).toEqual(0);
    expect(CartManager.getCartTotal()).toEqual(0);
  });
});
