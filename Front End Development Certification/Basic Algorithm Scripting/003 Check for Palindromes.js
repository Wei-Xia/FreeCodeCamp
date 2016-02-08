function palindrome(str) {
  // Good luck!
  
  var lowerCase = str.toLowerCase();
    
  var removeSpace = lowerCase.replace(/\s/g, '');
  
  var removeSymbol = removeSpace.replace(/[^a-zA-Z0-9]/g, '');
    
  var finalStr = removeSymbol.split("");
  
  finalStr = finalStr.reverse();

  finalStr = finalStr.join("");
  
  return removeSymbol===finalStr;  
}

palindrome("0_0 (: /-\ :) 0-0");
