function chunk(arr, size) {
  // Break it up.
  var newArray = [];
  
  for (var i = 0; i < arr.length; i = i + size) {
    var innerArr = arr.slice(i, i + size);
    newArray.push(innerArr);  
  }
  
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);
