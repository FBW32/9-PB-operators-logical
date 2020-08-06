// 0
let dogIsBetter = true;
let catIsBetter = false;

// 1.

// a.
console.log(dogIsBetter && catIsBetter); //false

// b.
console.log(dogIsBetter || catIsBetter); //true

// c.
console.log(!(dogIsBetter && catIsBetter)); //true

// 2.
let atoms = (200)*2; // 400
let sandGrains = (100)*2; //200
let starsInSky = (300)*2; //600
console.log(atoms);
console.log(sandGrains);
console.log(starsInSky);
// 3.

// a.
console.log((atoms > starsInSky) && (atoms > sandGrains )); // false

// b.
console.log(atoms != sandGrains); //true

// c.
console.log((starsInSky < sandGrains)|| (starsInSky > atoms)); // true


// d.
console.log((atoms == starsInSky) || (atoms  != sandGrains)); //true

// e.
console.log((atoms >= 10) && (sandGrains <= 10)); // false

