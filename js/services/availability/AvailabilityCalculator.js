var _ = require('underscore');

var AvailabilityCalculator = (function() {
  var calculate = function(product, repoProducts, cartProducts) {
    var cartProduct = _.find(cartProducts, function(cartProduct) {
      return cartProduct.id == product.id;
    });

    var repoProduct = _.find(repoProducts, function(repoProduct) {
      return repoProduct.id == product.id;
    });

    if (_.isUndefined(repoProduct)) {
      return 0;
    }

    if (_.isUndefined(cartProduct)) {
      return repoProduct.quantity;
    }

    return repoProduct.quantity - cartProduct.addedToCartQuantity;
  };

  return {
    calculate: calculate
  }
})();

module.exports = AvailabilityCalculator;
