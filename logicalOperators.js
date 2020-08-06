// Programming Basics: Logical Operators
// These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the correct logical operator.

// QUESTION 1.

// Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.

let dogIsBetter = true;
let catIsBetter = false;

// Check the result of:

// a) dogIsBetter AND catIsBetter.

console.log("1a is " + (dogIsBetter && catIsBetter));
// FALSE


// b) dogIsBetter OR catIsBetter.

console.log("1b is " + (dogIsBetter || catIsBetter));
// TRUE


// c) NOT (dogIsBetter AND catIsBetter).

console.log("1c is " + (!(dogIsBetter && catIsBetter)));
// TRUE



// QUESTION 2.

// Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.

let atoms = 20;
let sandGrains = 30;
let starsInSky = 40;

// Check the result of whether:

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log("2a is " + ((atoms > starsInSky) && (atoms > sandGrains)));
// FALSE
//
// The && logical operator result is dependent on all the results to be true. Thus, if all the results provided have a TRUE value the overal result will be TRUE. Else, i.e. at least one of the statements is FALSE, then the overall statement will be FALSE.
//
// The query asks if:
// atoms(20) is greater than starsInSky(40) --> FALSE
// atoms(20) is greater than sandGrains(30) --> FALSE
// Thus, the overall result is FALSE



// b) atoms is NOT equal to sandGrains.

console.log("2b is " + (atoms != sandGrains));
// TRUE
//
// The != logical operator check to see if two value don't equal one another. 
// If the values are not equal it will give a TRUE result. 
// Else, i.e. if the two values equal, then it will give a FALSE result.
//
// The query asks if:
// atoms(20) does NOT equal sandGrains(30).
// since the two values of the variable do NOT equal one another.
// The query is TRUE.


// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.

console.log("2c is " + ((starsInSky < sandGrains) || (starsInSky > atoms)));
// TRUE
// 
// The || logical operators state that the queries are mutual exclusive. 
// If any of the queries have a TRUE result, then the overall result will be TRUE. 
// Else, i.e. none of the results have a TRUE result, then overall is FALSE.
//
// The query asks if:
// starsInSky(40) is NOT less than sandGrains(30) --> FALSE
// starsInSky(40) IS greater than atoms(20) --> TRUE
// Thus, the overall result is TRUE


// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

console.log("2d is " + ((atoms == starsInSky) || (atoms != sandGrains)));
// TRUE
// 
// Another mutally exclusive query
// 
// The query asks if:
// atoms(20) EQUALS starsInSky(40) --> FALSE
// atoms(20) does NOT EQUAL sandGrains(30) --> TRUE
// Thus, the overall result is TRUE.


// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.

console.log("2e is " + ((atoms >= 10) && (sandGrains <= 10)));
// FALSE
//
// Another && dependent query
// 
// The query asks if:
// atoms(20) is GREATER THAN or EQUAL to 10 --> FALSE
// sandGrains(30) is LESS THAN or EQUAL to 10 --> FALSE
// Thus, the overall result is FALSE


// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log("2f is " + (((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100)));
// TRUE
//
// Another || mutually exclusive query.
//
// The query asks if:
// atoms(20) * staryInSky(40) is LESS than 100 --> FALSE
// atoms(20) * sandGrains(30) is GREATER than 100 --> TRUE
// Thus, the overall result is TRUE


// BONUS: Explain in words the logic of each result in a comment after the result.
