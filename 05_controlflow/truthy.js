const userEmail = []

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values :- false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values :- "0", 'false', " ", [], {}, function(){}


//check array is empty or not

const useremail = []

if(useremail.length === 0){
    console.log("Array is empty");
}


//checl onject is empty or not
const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // output - 5
val2 = null ?? 10 // output - 10
val3 = undefined ?? 10 // output - 15
val4 = null ?? 10 ?? 20 //output - 10


//Terniary Operator :- condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");


