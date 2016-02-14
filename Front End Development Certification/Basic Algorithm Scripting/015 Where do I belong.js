function where(arr, num) {
  // Find my place in this sorted array.
  
  arr = arr.sort(function(a, b){return a-b});
  
  var i = 0;
  
  while (arr[i] < num) {
    i++;
  }
  
  return i;
}

where([5, 3, 20, 3], 5);
