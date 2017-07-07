/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  var answer = [];
  if (num < 0) {
    return "";
  } else {
    for (i = 0; i < num; i++) {
      answer.push(str);
    }
    return answer.join("");
  }
}
