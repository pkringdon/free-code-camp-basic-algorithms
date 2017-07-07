
function factorialize(num) {
  
  if (num !== 0) {
  var array = [];
  for (i = 1; i <= num; i++) {
    array.push(i);
  }
  // [1,2,3,4,5]
  var answer = array.reduce(function(total,curVal) {
    return total*curVal;
  });
  return answer;
    } else return 1;
}
