const CURRENT_NUMBER = document.getElementById('currentNumber');
var count = CURRENT_NUMBER.innerHTML

function increment() {
 count++;
 CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
  count --;
  CURRENT_NUMBER.innerHTML = count;
}

