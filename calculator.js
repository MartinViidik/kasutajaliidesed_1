// saan kätte input väljad
window.onload = function(){

  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  // lisan nuppudele kuularid
  document.getElementById('to_inch').addEventListener('click' ,convertToInch);
  document.getElementById('to_cm').addEventListener('click' ,function(){

    cm.value = inch.value * 2.54;

});

};


function convertToInch(){

  inch.value = cm.value/2.54;

}
