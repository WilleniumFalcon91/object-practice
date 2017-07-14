// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var nums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

function positiveNums(num) {
    return num > 0;
}
var result = nums.filter(positiveNums);
console.log(result)


// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
function evenNums(num) {
    return num % 2 == 0;
}
var result = nums.filter(evenNums);
console.log(result)

// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two.
function squaresNum(num) {
    return num ** 2;
}
var result = nums.map(squaresNum);
console.log(result)

// Write a function which takes an array of city objects as input and returns a new array containing the cities whose temperature is cooler than 70 degrees
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function isCool (city) {
    if (city.temperature < 70) {
      return city.name;
    }
}
var result = cities.filter(isCool);
console.log(result);