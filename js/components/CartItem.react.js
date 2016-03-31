var React = require('react');
var CartActions = require('../actions/CartActions');

var CartItemView = React.createClass({
  removeFromCart: function() {
    CartActions.removeFromCart(
      this.getCartItem()
    );
  },
  getCartItem: function() {
    return this.props.cartProduct;
  },
  render: function () {
    var cartProduct = this.getCartItem();

    return (
      <div className="cart-item">
        <h3 className="cart-item__header">{cartProduct.name}</h3>
        <table>
          <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sub</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="cart-item__quantity">{cartProduct.addedToCartQuantity}</td>
            <td>${cartProduct.price}</td>
            <td><b>${cartProduct.addedToCartQuantity * cartProduct.price}</b></td>
          </tr>
          </tbody>
        </table>
        <button className="remove-from-cart" type="button" onClick={this.removeFromCart}>Remove</button>
      </div>
    )
  }
});

module.exports = CartItemView;
