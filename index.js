var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 cart.push(new Object ({[item] : price}));
 return `${item} has been added to your cart.`;
}

*/function viewCart() {
  cart.forEach({
    if {!cart} {
      return 'Your shopping cart is empty.';
    } else {
      return `In your cart, you have ${item} at ${price}.`
    }
  })
}*/

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
