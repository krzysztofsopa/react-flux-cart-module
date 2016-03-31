var React = require('react');
var ProductView = require('./ProductView.react');
var CartView = require('./CartView.react');

var AvailabilityCalculator = require('../services/availability/AvailabilityCalculator');
var ProductProvider = require('../provider/ProductProvider');
var CartStore = require('../stores/CartStore');

var FluxCartApp = React.createClass({
  getCartState: function() {
    return {
      products: ProductProvider.provide(),
      cartProducts: CartStore.getCartProducts()
    }
  },
  getProducts: function() {
    return this.state.products;
  },
  getCartItems: function() {
    return this.state.cartProducts;
  },
  getInitialState: function() {
    return this.getCartState();
  },
  componentDidMount: function() {
    CartStore.addChangeListener(this.onChange);
  },
  render: function() {
    var products = this.getProducts();
    var cartItems = this.getCartItems();
    return (
      <div>
        <div className="products-holder">
          {Object.keys(products).map(function(key){
            return (
              <ProductView key={key} product={products[key]} availability={
                AvailabilityCalculator.calculate(products[key], products, cartItems)
              }/>
            )
          })}
        </div>
        <div>
          <CartView cartProducts={cartItems}/>
        </div>
      </div>
    );
  },
  onChange:function () {
    this.setState(this.getCartState());
  }
});

module.exports = FluxCartApp;
