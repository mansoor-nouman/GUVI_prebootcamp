// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
function reverseString(str) {

    var splitString = str.split(""); 
 
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join("");
    return joinArray; 
}

var inp=userInput[0];
var ans=reverseString(inp);

console.log(ans);
  //end-here
});