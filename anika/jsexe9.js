// **************Exercise 9*******************

// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators.
// **Print all your checks to the console.
// Every capitalized word stands for the logical operator that you must
// use in each task.
// Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "dogIsBetter" with the value of true,
// and "catIsBetter" with the value of false.

let dogIsBetter = true;
let catIsBetter = false;

// 1. Check the result of:

// - a) dogIsBetter AND catIsBetter.

// - b) dogIsBetter OR catIsBetter.

// - c) NOT (dogIsBetter AND catIsBetter).

console.log(dogIsBetter); // true
console.log(catIsBetter); // false

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky".
// Give these variables number values.

let atoms = 25;
let sandGrains = 8;
let starsInSky = 100;

// 3. Check the result of whether:

// - a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

// - b) atoms is NOT equal to sandGrains.

// - c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.

// - d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

// - e) atoms is greater than or equal to 10 AND
// sandGrains is less than or equal to 10.

// - f) atoms multiplied by starsInSky is less than 100 OR whether atoms
// multiplied by sandGrains is greater than 100.

// 3. a)
console.log(atoms > starsInSky && atoms > sandGrains); // false

// 3. b)
console.log(!(atoms == sandGrains)); // true

// 3. c)
console.log(starsInSky < sandGrains || starsInSky > atoms); // true

// 3. d)
console.log(atoms === starsInSky || atoms !== sandGrains); // true

// 3. d)
console.log(atoms === starsInSky || !(atoms === sandGrains)); // true

// 3. e)
console.log(atoms >= 10 && sandGrains <= 10); // true

// 3. f)
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
