function calculate() {
   let p = document.getElementById('result').value;
   if(p != ''){
    let q = eval(p);
    document.getElementById('result').value = q;
   }
  
}

function display(value) {
   document.getElementById('result').value += value;
}
function clearScreen() {
   document.getElementById('result').value = '';
}
