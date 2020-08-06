// Q1
let dogIsBetter = true;
let catIsBetter = false;
console.log(dogIsBetter && catIsBetter);
console.log(dogIsBetter || catIsBetter);
console.log(!(dogIsBetter && catIsBetter));

// Q2

let atoms = 100;
let sandGrains = 20;
let starsInSky = 300;

// Q3
console.log(atoms > starsInSky && atoms > sandGrains);
console.log(atoms != sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms);
console.log(atoms == starsInSky || atoms != sandGrains);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);

// OR: If any of its arguments are true, it returns true, otherwise it returns false.
//AND : If any of its arguments are false, it returns false, otherwise it returns true.
// The difference is that AND returns the first falsy value while OR returns the first truthy one.
