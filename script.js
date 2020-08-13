/* Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false. */

let dogIsBetter = true;
let catIsBetter = false;

/* 1. a) dogIsBetter AND catIsBetter. */

console.log(dogIsBetter && catIsBetter); //false

/* 1. b) dogIsBetter OR catIsBetter.
 */
console.log(dogIsBetter || catIsBetter); //true

/* 1. c) NOT (dogIsBetter AND catIsBetter).
 */
console.log(!(dogIsBetter && catIsBetter)); //true

/* 2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values. */
let atoms = 10;
let sandGrains = 20;
let starsInSky = 30;

/* 3. a) atoms is greater than starsInSky AND atoms is greater than sandGrains. */
console.log(atoms > starsInSky && atoms > sandGrains); // false becouse false and false gives false

/* 3. b) atoms is NOT equal to sandGrains.
 */
console.log(atoms !== sandGrains); // true becouse 10 is not iqual to 20 wich is true

/* 3. c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
 */
console.log(starsInSky < sandGrains || starsInSky > atoms); // true becouse false or true gives true

/* 3. d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
 */
console.log(atoms === starsInSky || atoms !== sandGrains); // true becouse false or true gives true

/* 3. e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
 */
console.log(atoms >= 10 && sandGrains <= 10); // false becouse true and false gives false

/* 3. f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.  */

console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); // true becouse 300 < 100 or 200 > 100 false or true, at lease one is true so it's true
