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
 
 var input = userInput[0].split(" ");
 
 var ans = hcf(input[0],input[1]);
 function hcf(x,y)
 {
     for(i=1; i<=x && i<=y; i++)
     {
         if(x%i === 0 && y%i === 0)
         {
             var answer = i;
         }
     }
     return answer;
 }
 
 console.log(answer);
 //end-here
});
