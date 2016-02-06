function factorialize(num) {
  
  var factorial = 1;

  for (var i = 1; i<num+1; i++) {
    factorial = factorial * i;
  }
  
  return factorial;
}

factorialize(5);
