/*
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

//My solution:
function highAndLow(numbers) {
  const sortedArr = numbers.split(' ').sort((a, b) => b - a);
  const max = sortedArr.slice(0, 1);
  const min = sortedArr.slice(-1);
  return max.concat(min).join(' ');
}
