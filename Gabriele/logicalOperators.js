// LOGICAL OPERATORS

// && - and

// || - or

// ! - not 

// 0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.

let dogIsBetter = true;
let catIsBetter = false;


// Check the result of:

// a) dogIsBetter AND catIsBetter.

console.log((dogIsBetter) && (catIsBetter)); // false
let result = ((dogIsBetter) && (catIsBetter));
console.log(result);

// 1st variable is true, 2nd one is false. Since we have && between the 2 variables the result cannot be true.


// b) dogIsBetter OR catIsBetter.

console.log((dogIsBetter) || (catIsBetter)); // true
let result2 = ((dogIsBetter) || (catIsBetter));
console.log(result2);

// In this case the sign OR makes the result true, because one of the 2 variables is true.



// c) NOT (dogIsBetter AND catIsBetter).
console.log(!(dogIsBetter) && (catIsBetter)); // false
let result3 = (!(dogIsBetter) && (catIsBetter));
console.log(result3);
// the sign NOT makes the result false, because the result inside the parenthesis would be true.

// 3. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.

let atoms = 10357;
let sandGrains = 3678;
let starsInSky = 8435;

// 3. Check the result of whether:

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log((atoms > starsInSky) && (atoms > sandGrains)); 
let check = ((atoms > starsInSky) && (atoms > sandGrains));
console.log(check); // true

// 1st equation is true, 2nd also true: sign && in between makes it true again.



// b) atoms is NOT equal to sandGrains.

console.log(atoms !== sandGrains);
let check2 = (atoms !== sandGrains);
console.log(check2); // true



// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.

console.log((starsInSky < sandGrains) || (starsInSky > atoms));
let check3 = ((starsInSky < sandGrains) || (starsInSky > atoms));
console.log(check3); // false

// both equations are false, sign OR gives total result of false.


// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

console.log((atoms === starsInSky) || (atoms !== sandGrains));
let check4 = ((atoms === starsInSky) || (atoms !== sandGrains));
console.log(check4); // true

// 1st equation is false, 2nd is true. The sign OR makes the total result true.



// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.

console.log((atoms >= 10) && (sandGrains <= 10));
let check5 = ((atoms >= 10) && (sandGrains <= 10));
console.log(check5); // false

// 1st equations is true, 2nd is false. Sign AND makes total result false.


// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log((atoms * starsInSky < 100) || (atoms * sandGrains > 100));
let check6 = ((atoms * starsInSky < 100) || (atoms * sandGrains > 100));
console.log(check6); // true

// 1st equations is false, 2ns is true. Sign OR make the total result true.


