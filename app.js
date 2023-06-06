/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n', foods);
/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push("pizza", "cheeseburger");

console.log('Exercise 2 Result:\n', foods);
/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

foods.unshift("taco");

console.log('Exercise 3 Result:\n', foods);
/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...

let favFood = foods[1];

console.log('Exercise 4 Result:\n', favFood);
/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...

foods.splice("tofu", 0, 2);

console.log('Exercise 5 Result:\n', foods);
/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

foods.splice("cupcake", "sushi", 1, 1);

console.log('Exercise 6 Result:\n', foods);
/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...

const yummy = foods.slice(1, 3);

console.log('Exercise 7 Result:\n', yummy);
/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...

let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 Result:\n', soyIdx);
/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...

const allFoods = foods.join(" -> ")

console.log('Exercise 9 Result:\n', allFoods);
/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

let hasSoup = foods.includes("soup");

console.log('Exercise 10 Result:\n', hasSoup);
/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...

const odds = [];
nums.forEach(function(num) {
  if (num % 2) odds.push(num);
});

console.log('Exercise 11 Result:\n', odds);
