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

 var num=userInput[0];
 var num1=userInput[1];
 var ans= parseInt(num) + parseInt(num1);
 console.log(ans);
  //end-here
});