var userSentence = prompt("Enter a sentence");
//first function
var outputOne;

function capitalizeletters(){
  outputOne = userSentence.charAt(0).toUpperCase() + userSentence.charAt(userSentence.length-1). toUpperCase();
}


//second function
function reverseLetters() {
  return outputOne.split("").reverse().join("");
}
//third functions
function callBoth(outputOne){
  capitalizeletters();
}
