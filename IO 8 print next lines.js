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

var inpu=userInput[0].split(" ");
console.log(inpu[0]);
console.log(inpu[1]);
console.log(inpu[2]);

  //end-here
});