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

var a = userInput[0];
var area = Math.sqrt(3) * a * a /4;
var fixed = area.toFixed(2);

console.log(fixed);
  //end-here
});