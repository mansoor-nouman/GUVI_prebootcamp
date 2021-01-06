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

var inpu= userInput[0];
var inpu1= userInput[1];
var inpu2= userInput[2];

console.log(inpu+ ' ' + inpu1 + ' ' + inpu2);


  //end-here
});