//this is only use inside the object not use in the function 
const user = {
    username: "varni",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()

//function create karne ke types

// 1. Function stored in a constant variable
const chai = function(){
    let username = "varni"
    console.log(username);
}

//2. only function
function chai1(){
    let username = "varni"
    console.log(username);   
}

//3. arrow function

const chai2 = () => {
    let username = "varni"
    console.log(username); 
}

//basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(1,2));

const add = (num1) => num1