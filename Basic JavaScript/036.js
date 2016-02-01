function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  myNoun = "cat" + ", dog";
  myAdjective = "little" + ", big";
  myVerb = "hit" + " ran";
  myAdverb = "slowly" + " quickly";

  result = myNoun+", "+myAdjective+", "+myVerb+", "+myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
