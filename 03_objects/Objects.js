

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "varni",
    "full name" : "varnikumar patel",
    [mySym]: "mykey1", // symbol print ke liye always ye use karna padta hai 
    age: 20,
    location: "ank",
    email: "varni@gmail.com",
    isLoggedIn : false
}

console.log(JsUser.age);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "varni12@gmail.com"
// Object.freeze(JsUser) // iske baad kuch bhi change nhi kar sakte 
JsUser.email = "varni123@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting1 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting1());
