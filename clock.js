// clock.js
window.onload = function(){

  var clock = document.getElementById('clock');

  writeDate();

};

function writeDate(){

  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = hours + ':' + minutes + ':' + seconds;

}
