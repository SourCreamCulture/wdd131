'use strict';

const one = 1;
const two = "2";
const three = "e";
let result = one + two;
console.log(result);
output("ln7", result);

result = one + parseInt(two);
output("ln10", result);

result = one * two;
output("ln16", result);

result = one * three;
output("ln21", result);

const too = 4;

result = one + two;
output("ln27", result);

const myArray = [1,2,3,5];
myArray.push(4);
console.log(myArray);

// Remove last two items and add them back in correct order
myArray.pop(); // removes 4
myArray.pop(); // removes 5
myArray.push(4);
myArray.push(5);

console.log(myArray);

// The code below is used to aid in displaying the results.
function output(line, content) {
  const outputElement = document.querySelector(".output");
  outputElement.innerHTML += `<p>${line} : ${content}</p>`;
} 