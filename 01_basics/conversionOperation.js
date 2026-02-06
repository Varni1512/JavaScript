let score = 33

console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "varni"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
// "" => false
// "varni" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);