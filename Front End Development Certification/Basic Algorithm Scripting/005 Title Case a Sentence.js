function titleCase(str) {
 
  var upperCase = str.replace(/\w\S*/g, function(txt)
             {return txt.charAt(0).toUpperCase() + 
                     txt.substr(1).toLowerCase();});
  
  return upperCase;
}

titleCase("I'm a little tea pot");
