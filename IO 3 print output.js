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
 var k=userInput[1].split(" ");
 var temp=inpu.join(' ');
 var temp1 = k.join(' ');
 console.log(temp);
 console.log(temp1);

  //end-here
});