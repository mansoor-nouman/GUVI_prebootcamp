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
var b = userInput[1];
var c = userInput[2];

if(a>b)
{
    if(a>c)
        console.log(a);
    else
        console.log(c);
}
else if(b>c)
{
    console.log(b);
} else
    console.log(c);

  //end-here
});