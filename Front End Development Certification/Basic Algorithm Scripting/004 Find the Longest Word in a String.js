function findLongestWord(str) {
 
  var newStr = str.split(" ");

  var longestStr = newStr[0];
  
  for (var i = 1; i < newStr.length; i++) {
    if (newStr[i].length >= longestStr.length)
      longestStr = newStr[i];
  }
  
  return longestStr.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
