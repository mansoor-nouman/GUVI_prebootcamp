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

if(parseInt(num[0])>parseInt(num[1]))
console.log(parseInt(num[1]));
else
console.log(parseInt(num[0]));


  //end-here
});