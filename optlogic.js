
//logical Operators

let dogIsBetter = true;
let catIsBetter = false;

// 1)a.
console.log((dogIsBetter) && (catIsBetter));  // false  two opposite true and false 

console.log((dogIsBetter) || (catIsBetter));  // true   one of two opposite 

console.log(!((dogIsBetter) && (catIsBetter)));  // true    true is not false


let atoms = 15;
let sandGrains = 25;
let starsInSky = 35;

console.log((atoms > starsInSky) && (atoms > sandGrains));  // false 

console.log(atoms != sandGrains);                           // true

console.log((starsInSky < sandGrains) || (starsInSky > atoms));  // true 

console.log((atoms == starsInSky) || (atoms != sandGrains));  //true

console.log((atoms >= 10) && (sandGrains <= 10));    // false

console.log(((atoms * starsInSky) < 100) || ((atoms * sandGrains)< 100));  // false 




