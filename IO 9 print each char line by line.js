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

for(var i=0; i<inpu.length; i++)
{
    console.log(inpu.charAt(i));
}

  //end-here
});