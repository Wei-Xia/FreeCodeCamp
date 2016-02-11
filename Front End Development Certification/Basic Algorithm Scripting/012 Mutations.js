function mutation(arr) {
  
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  
  var n = arr[0].split("");
  
  for (i=0;i<arr[1].length;i++){
    if(var n.indexOf(arr[1][i]) === -1){
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);
