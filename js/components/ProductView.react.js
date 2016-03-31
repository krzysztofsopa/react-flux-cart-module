var React = require('react');
var CartActions = require('../actions/CartActions');

var ProductView = React.createClass({
  getProduct: function() {
    return this.props.product;
  },
  addToCart: function(event) {
    if (parseInt(this.state.quantity) > 0 && this.props.availability >= parseInt(this.state.quantity)) {
      CartActions.addToCart(
        this.getProduct(),
        parseInt(this.state.quantity)
      );
    }
  },
  getInitialState: function() {
    return {
      quantity: 1
    }
  },
  setQuantity: function(event) {
    return this.setState({
      quantity: event.target.value
    });
  },
  render: function() {
    var product = this.getProduct();
    return (
      <div className="product">
        <img src={product.img}/>
        <div className="product-detail">
          <h1 className="name">{product.name}</h1>
          <p className="description">{product.description}</p>
        </div>
        <table>
          <thead>
          <tr>
            <th>Price</th>
            <th>Available</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>${product.price}</td>
            <td>{this.props.availability}</td>
            <td>
              <input className="quantity" type="number" name="quantity" min="0"
                value={this.state.quantity}
                max={this.props.availability}
                onChange={this.setQuantity}/>
            </td>
          </tr>
          </tbody>
        </table>
        <button type="button" className="add-to-cart-button" onClick={this.addToCart}>Add to cart</button>
      </div>
    );
  }
});

module.exports = ProductView;
