

function confirmEnding(str, target) {

  var last = [];
  var space = /\s.+$/g;
  
  
  if (str.match(space) === null) {
    //if str is a word, compare last character
  last = str.substr(-1);
     if (last == target) {
      return last == target;
    } else {
      last = str.substr(str.length-target.length,target.length);
      return last == target;
    }
    
  } else {
   //if str is a sentence, compare last word
    last = str.split(" ");
    var index = last.length-1;
    if (last[index] == target) {
      return last[index] == target;
    } else {
      last = last[index].substr(last[index].length-target.length,target.length);
      return last == target;
    }
    
    
  } 

}
