function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  
  for (var i = 0; i < str.length; i++) {
    
    var c = str.charCodeAt(i);
    
    if (c >= 65 && c <= 77) {
      newStr += String.fromCharCode(c+13);
    } else if (c > 77 && c <= 90) {
      newStr += String.fromCharCode(c-13);
    } else {
      newStr += String.fromCharCode(c);
    }
  }
  return newStr;
  }

// Change the inputs below to test
rot13("SERR PBQR PNZC");
