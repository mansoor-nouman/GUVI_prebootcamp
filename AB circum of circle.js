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
var rad = userInput[0];
var cir = 2* 22 / 7 * rad;
console.log(cir.toFixed(2));
  //end-here
});