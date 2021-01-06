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
  var temp=inpu.join(' ');
 /* for(var i=0,len=inpu.length; i<len; i++)
  {
      temp = inpu[i]+ " ";
      i++;
  }*/
  
console.log(temp);
  //end-here
});