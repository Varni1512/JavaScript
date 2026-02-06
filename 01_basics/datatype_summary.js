/*
Primitive Data Types
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


=> Stack memory is used for the storage : copy milta hai
*/

// 1. String
let name = "Varnikumar";
console.log(typeof name); 
// return type: string

// 2. Number
let age = 21;
console.log(typeof age); 
// return type: number

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); 
// return type: boolean

// 4. null
let emptyValue = null;
console.log(typeof emptyValue); 
// return type: object (this is a known JavaScript bug)

// 5. undefined
let notAssigned;
console.log(typeof notAssigned); 
// return type: undefined

// 6. Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); 
// return type: symbol

// 7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); 
// return type: bigint



/*
Non-Primitive (Reference Types)
Array, Object, Function

=> Heap memory is use for the storage : Reference milta hai(original value)
*/

// 1. Array
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); 
// return type: object

// 2. Object
let person = {
    name: "Varnikumar",
    age: 21
};
console.log(typeof person); 
// return type: object

// 3. Function
function greet() {
    return "Hello";
}
console.log(typeof greet); 
// return type: function
