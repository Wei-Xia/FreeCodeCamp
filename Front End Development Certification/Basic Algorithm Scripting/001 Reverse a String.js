function reverseString(str) {
  
  str = str.split("");
  
  str = str.reverse();
  
  str = str.join("");
  
  return str;
}

reverseString("Greetings from Earth");
