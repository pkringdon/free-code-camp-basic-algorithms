
function findLongestWord(str) {
  
  // turn string into array using spaces as delimeter
  
  var array = str.split(" ");
  
  // push the length of each word in array to new strLength array
  
  var strLengths = [];
  for (i = 0; i < array.length; i++) {
    strLengths.push(array[i].length);
  } 
  
  // sort the strLength function from smallest to largest integer
  
  strLengths.sort(function(a,b) {
    return a - b;
  });
  
  // return the highest (last) number in the StrLengths array 

  var arrIndex = strLengths.length - 1;
  return strLengths[arrIndex];  
}
