/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 91 

*/

//My solution:

function squareSum(numbers) {
  return numbers
    .map((numb) => Math.pow(numb, 2))
    .reduce((acc, curr) => acc + curr, 0);
}
