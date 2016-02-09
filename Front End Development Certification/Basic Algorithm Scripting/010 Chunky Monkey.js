function chunk(arr, size) {
  // Break it up.
  
  var newArray = [];
  
  for (var j = 0; j < arr.size; j++) {
    for (var i = 0; i < size; i++) {
      newArray[i] = arr[j];
    }
  }
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);
