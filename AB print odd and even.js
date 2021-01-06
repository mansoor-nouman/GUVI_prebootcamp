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
  var output=[],snum=num.toString();
  var eve=[],odd=[];
  for(var i=0, len=snum.length; i<len; i++)
  {
      if(snum.charAt(i)%2 ===0)
      {
          eve += snum.charAt(i)+ " ";
      }
      else
      {
          odd += snum.charAt(i)+ " ";
      }
    
       //output += snum.charAt(i)+ " ";
  }

  
  var split = eve.split(" ");

 eve1 = split.sort();
 console.log(eve1.join(' ').trim());
 var split2 = odd.split(" ");
 odd1 = split2.sort();
 console.log(odd1.join(' ').trim());
      
  //end-here
});