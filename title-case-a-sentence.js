function titleCase(str) {
  
  var wordLetter = [[]];
  var answer = [];
  
  wordLetter = str.split(" ");
  
  for (i = 0; i <wordLetter.length; i++) {
  wordLetter[i] = wordLetter[i].split("");
  wordLetter[i][0] = wordLetter[i][0].toUpperCase();
    for (j = 1; j < wordLetter[i].length; j++) {
      wordLetter[i][j] = wordLetter[i][j].toLowerCase();
     
    }
     wordLetter[i] = wordLetter[i].reduce(function(total, newVal) {
        return total + newVal;
      });
     }
  answer = wordLetter.reduce(function(total, newVal) {
  return total + " " + newVal;
  });

  return answer;
}
