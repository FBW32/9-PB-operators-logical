// 08.08.2020
// EXERCISE 0
// Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

// EXERCISE 1a
// dogIsBetter AND catIsBetter.
console.log(dogIsBetter) && (catIsBetter);

// EXERCISE 1b
// dogIsBetter OR catIsBetter.
console.log(dogIsBetter) || (catIsBetter);

// EXERCISE 1c
// NOT (dogIsBetter AND catIsBetter).
console.log(!(dogIsBetter) && (catIsBetter));

// EXERCISE 2
// Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 102;
let sandGrains = 37;
let starsInSky = 56;

// EXERCISE 3a
// atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log(atoms > starsInSky) && (atoms > sandGrains); // true. atoms is greater than starInSky and sandGrains.

// EXERCISE 3b
// atoms is NOT equal to sandGrains.
console.log(!(atoms) === (sandGrains)); // false. atoms if not equals to sandGrains.

// EXERCISE 3c
// starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log(starsInSky < sandGrains) || (starsInSky); // false. starinSky is greater than sandGrain, and starInSky can not be greater or less than itself.

// EXERCISE 3d
// atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log(atoms === starsInSky) || (atoms !== sandGrains); // false. atoms is not equals to starinSky or sandGrains.

// EXERCISE 3e
//  atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log(atoms >= 10) && (sandGrains < 10); // true. atoms is greater than 10 and sandGrains is also greater than 10.

// EXERCISE 3f
// atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log(atoms * starsInSky < 100) || (atoms * sandGrains > 100); // False. It return false because one of the equation is correct while the other is wrong.