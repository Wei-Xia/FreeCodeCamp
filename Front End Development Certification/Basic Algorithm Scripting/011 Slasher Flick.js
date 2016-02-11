function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //var newArray = arr.slice(howMany, arr.length);    //Way one
  var newArray = arr.splice(howMany, arr.length);     //Wat two
  
  return newArray;
}

slasher(["burgers", "fries", "shake"], 1);
