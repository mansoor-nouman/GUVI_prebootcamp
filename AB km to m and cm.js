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

var km= userInput[0];
 var m= km*1000;
 var cm= m* 100;
 console.log(m);
 console.log(cm);
  //end-here
});