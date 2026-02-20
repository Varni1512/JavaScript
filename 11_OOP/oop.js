const user = {
    usename: "varni",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");  
        console.log(`Username ${this.usename}`);  
    }
}

// console.log(user.usename);
// console.log(user.getUserDetails());

function User(usename, loginCount, isLoggedIn){
    this.usename = usename,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}

const userone = new User("varni", 12, true)
const usertwo = new User("varnikumar", 10, true)

console.log(userone);
console.log(usertwo);
