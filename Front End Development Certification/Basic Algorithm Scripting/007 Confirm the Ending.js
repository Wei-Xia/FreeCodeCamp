function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetArray = target.split("");
  
  targetArray = targetArray.reverse();
  
  var strArray = str.toLowerCase().split("");
  
  strArray = strArray.reverse();
  
  var newArray = [];
  
  for (var i = 0; i < target.length; i++) {
    newArray[i] = strArray[i];
  }
  
  return newArray.toString() === targetArray.toString();  //compare two arrays
}

end("Bastian", "tian");
