function destroyer(arr) {
  
for (var i = 0; i<arr.length; i++) {
    for (var j=0; j< arguments.length; j++) {
        if(arguments[j] === arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
  }
   return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
