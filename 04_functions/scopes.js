let a = 300 // global scope


//block scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = "Varni"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // this will give the error because it's out side the function 
    two()
}
one()


