function largestOfFour(arr) {
  var answer = [[]];
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort(function(a,b) {
    return b - a;
  });
    answer[i] = arr[i][0];
  }
  
  return answer;
}
