function repeat(str, num) {
  // repeat after me
  
  var array = [];
  
  for (var i = 0; i < num; i++) {
    array[i] = str;
  }
  
  var repeatString = array.join("");
  
  return repeatString;
}

repeat("abc", -2);
