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

var num = userInput[0].split(" ");

var plus = (-num[1] + Math.sqrt(Math.pow(num[1],num[1])- 4*num[0]*num[2]))/(2*num[0]);
console.log(plus.toFixed(2));

var minus = (-num[1] - Math.sqrt(Math.pow(num[1],num[1])- 4*num[0]*num[2]))/(2*num[0]);
console.log(minus.toFixed(2));
  //end-here
});