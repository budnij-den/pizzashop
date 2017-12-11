var x = window.localStorage.getItem('init_value');
function simpleCounter() {
  x = x*1+1;
  window.localStorage.setItem('init_value',x);
  alert("нажато "+x+" раз");
};

function resetCounter(){
  window.localStorage.removeItem('init_value');
  x=0;
  alert("счётчик сброшен, теперь "+x);
}

