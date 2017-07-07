
function palindrome(str) {
  var array = [];
  array = str.replace(/[^a-zA-Z0-9]/g,"").split("");
  var forward = array.join("").toLowerCase();
  var backward = array.reverse().join("").toLowerCase();
 return (backward === forward);
 
}
