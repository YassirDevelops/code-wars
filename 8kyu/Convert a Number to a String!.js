/*
DESCRIPTION:
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

//My solution:
function numberToString(num) {
  //we use the built in string constructor function
  //to convert the number into a string
  return String(num);
}

console.log(numberToString(67));
