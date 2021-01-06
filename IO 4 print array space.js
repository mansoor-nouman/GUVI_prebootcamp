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

var inpu= userInput[0].split(" ");
var inpu1= userInput[1].split(" ");
var inpu2= userInput[2].split(" ");
console.log(inpu.join(' '));
console.log(inpu1.join(' '));
console.log(inpu2.join(' '));
  //end-here
});