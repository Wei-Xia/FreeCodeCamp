function largestOfFour(arr) {
  // You can do this!
  
  var largestNumber = [0,0,0,0];
  
  for (var a = 0; a < arr.length; a++) {
   for (var b = 0; b < arr[a].length; b++) {
     if (arr[a][b] > largestNumber[a])
       arr[a][b] = largestNumber[a];
   }
  }
  
  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
