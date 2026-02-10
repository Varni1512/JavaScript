const myArr = [0, 1, 2, 3, 4]
const name = ["varni", "patel"]
const Arr = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArr);
// console.log(myArr[0]);


//Array methods

//end mai number add karne ke liye 
myArr.push(10)

//end mai se number nikal ne ke liye
myArr.pop();

// starting mai number add karne ke liye
myArr.unshift(0)

//starting mai se number nikal ne ke liye
myArr.shift()

// for checking purpose
console.log(myArr.includes(9));

//for finging the index 
console.log(myArr.indexOf(2));

//array converts into the string
const newArr = myArr.join()
console.log(newArr);


console.log("A ",myArr);

//slice is use for the print the number between the range but in array no any change and last number is not print 
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

//splice is also use for the print the number but original array is cut and also in range last number is also print 
const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("c ",myArr);


