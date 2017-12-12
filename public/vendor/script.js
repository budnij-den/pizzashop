// var x = window.localStorage.getItem('init_value');
// function simpleCounter() {
//   x = x*1+1;
//   window.localStorage.setItem('init_value',x);
//   alert("нажато "+x+" раз");
// };

// function resetCounter(){
//   window.localStorage.removeItem('init_value');
//   x=0;
//   alert("счётчик сброшен, теперь "+x);
// };

function addToCart(productId, productTitle){
  var key = 'product_' + productId;
  var x = window.localStorage.getItem(key);
  amount = amount*1 + 1;
  window.localStorage.setItem(key, amount);
  alert(amount + " " + productTitle + ' pizza is added to cart');
};

function clearCart(){
  window.localStorage.clear();
  alert(window.localStorage.length);
};

// print "enter product id:"
// id = gets.chomp
// print "enter amount"
// n = gets.chomp.to_i

// order={}
// id ? order[id]=order[id]+n : order[id]=n

// p order
