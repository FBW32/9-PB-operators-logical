//0
let dogIsBetter = true;
let catIsBetter = false;
//1
//a
console.log(dogIsBetter && catIsBetter);
//b
console.log(dogIsBetter || catIsBetter);
//c
console.log(!(dogIsBetter && catIsBetter));

//2
let atoms = 987423848234848324289347284789472398472984372347847894784784738478478347847238473477472347834782374823478234782347238473847283723847283742834782347384;
let sandGrains = 09498972428428429884498743897438834;
let starsInSky = 723892387523852357235988423984984;
//3
//a)
console.log(atoms > starsInSky && atoms > sandGrains);

//b)
console.log(atoms !== sandGrains);
//c)
console.log(starsInSky < sandGrains || starsInSky > atoms);
//d)
console.log(atoms == starsInSky && atoms != sandGrains);
//e)
console.log(atoms >= 10 && sandGrains <= 10);
//f)
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
