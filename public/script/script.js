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
//  alert(amount + " " + productTitle + ' pizza is added to cart');
  updateOrderInput();
  updateCartButton();
};

function showCart(){
  var total = 0;
  for (var i = 0; i < window.localStorage.length; i++) {
    var ident = window.localStorage.key(i);
    var singleAmount = window.localStorage.getItem(ident);
    total = total + singleAmount*1;
  };
//  alert('there is (are) '+total+' item(s) in cart');
  return total;
};

function getOrder(){
  var order = '';
    for (var i = 0; i < window.localStorage.length; i++) {
    var ident = window.localStorage.key(i);
    var singleAmount = window.localStorage.getItem(ident);
    order = order + ident + "=" + singleAmount*1 + ",";
  };
  return order;
};

function clearCart(){
  window.localStorage.clear();
  updateOrderInput();
  updateCartButton();
  emptyCartAlert();
};

function updateOrderInput(){
  var orders = getOrder();
  $('#postField').val(orders);
};

function updateCartButton(){
  var text = "Cart (" + showCart() + ")";
  $('#cartButton').val(text);
};

function clientSaveToDb(){
  var saver = "<% @c.save %>";
  $('#clientSaverTag').val(saver);
  clearCart();
//  alert(saver + " saved!");
};

function emptyCartAlert(){
  if (window.localStorage.length == 0){
    $('#empty_cart_alert').show();
    $('li#orderList').hide();
    $('#place_order_button').prop('disabled',true);
  } else {
    $('#empty_cart_alert').hide();

  };
};

window.onLoad = emptyCartAlert();
window.onLoad = updateOrderInput();
window.onLoad = updateCartButton();
