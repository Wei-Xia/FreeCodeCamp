function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3) {
    str = str.slice(0, num);
    return str + "...";
  }
  
  if (num >3) {
    if (str.length > num) {
      str = str.slice(0, num-3);
      return str + "...";}
    else
      return str;
  }
    
}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
