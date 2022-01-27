var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
var clearButton = document.getElementsByClassName('clear-cart')[0];

var cart = [];
var total = 0;

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item')
      .getAttribute('data-name');

    var itemPrice = e.target.closest('.item')
      .getAttribute('data-price');

    var product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);
    total += parseInt(product.price);
    renderCart();
  }
});



clearButton.addEventListener('click', function () {
  while(cart.length !== 0) {
    cart.pop();
  }
  total = 0;
  renderCart();
});

var renderCart = function () {
  var cartList = document.getElementsByClassName('cart-list')[0];
  var totalList = document.getElementsByClassName('total')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  var items = '';

  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';
  }

  cartList.innerHTML = items;
  totalList.innerHTML = total;

};