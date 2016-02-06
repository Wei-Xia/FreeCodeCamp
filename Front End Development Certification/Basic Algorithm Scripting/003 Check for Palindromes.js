function palindrome(str) {
  // Good luck!
  
  var lowerCase = str.toLowerCase();
  
  var newStr = lowerCase.split("");
  
  newStr = newStr.join("");
  
  newStr = newStr.replace( /\s/g, ""); 
  
  //newStr = newStr.reverse();
  

  
  //return newStr;
  return lowerCase === newStr;
}



palindrome("race car");
