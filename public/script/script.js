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
  var amount = window.localStorage.getItem(key);
  amount = amount*1 + 1;
  window.localStorage.setItem(key, amount);
  alert(amount + " " + productTitle + ' pizza is added to cart');
};

function getNumberOfItemsAtCart(){
  var total = 0;
  for (var i = 0; i < window.localStorage.length; i++) {
    var ident = window.localStorage.key(i);
    var singleAmount = window.localStorage.getItem(ident);
    total = total + singleAmount*1;
  };
  alert('there is (are) '+total+' item(s) in cart');
};

function clearCart(){
  window.localStorage.clear();
  alert('order reset, now is '+window.localStorage.length+' items in cart');
};

// print "enter product id:"
// id = gets.chomp
// print "enter amount"
// n = gets.chomp.to_i

// order={}
// id ? order[id]=order[id]+n : order[id]=n

// p order
