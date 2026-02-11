const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//array ke under hi new array ko add kar deta hai
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

//2 array ko combine karke ek array banata hai
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//new method to connect 2 arrays
const all_new = [...marvel_heros, ...dc_heros]
// console.log(all_new);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//inside all array ko ek hi array mai convert kar deta hai
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//use for check is this array or not
console.log(Array.isArray('varni'));

//convert string into the array
console.log(Array.from('varni'));

let score1 = 100
let score2 = 200
let score3 = 300

//converted many no of values into the array
console.log(Array.of(score1, score2, score3));



