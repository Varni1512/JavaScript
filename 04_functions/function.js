function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("R");
    console.log("N");
    console.log("I");
}

// sayMyName();


// function sum(number1, number2){ //here number1 & number2 is the parameters
//     console.log(number1 + number2); 
// }

function sum(number1, number2){ //here number1 & number2 is the parameters
    let result = number1 + number2;
    return result; 
}

const result = sum(1,2) //here when we call function then we pass the arguments
// console.log(result);


function loginmessage(username){
    return `${username} just logged in`
}

//if condition for handle the undefined case
function loginmessage(username){
    if(username === undefined){
        console.log("please enfter the name");
        return
    }
    return `${username} just logged in`
}

function loginmessage(username){
    if(!username){
        console.log("please enfter the name");
        return
    }
    return `${username} just logged in`
}

//if agar koi value pass na ho to by default ye print karega
function loginmessage1(username = "varni"){
    return `${username} just logged in`
}

// console.log(loginmessage()); //undefined
// console.log(loginmessage("varni")); //undefined


function calculateCartPrice(...num1){ //... means rest
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "varni",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "var",
    price: 120
})

const mynewArray = [200,400,600,800]

function returnvalue(getArray){
    return getArray[1]
}

// console.log(returnvalue(mynewArray));
console.log(returnvalue([200,300,400]));
