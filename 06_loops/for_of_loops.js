// for of loop

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet);
}

//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubey'
}

//for in loop
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "cpp", "java"]

for (const key in programming) {
    // console.log(programming[key]);
}


//for each loop

const coding = ["js", "java", "cpp", "python"]

coding.forEach(function (item) {
    // console.log(item);
})

const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumbers.map((num) => { return num + 10 })

console.log(newNum);

const new1 = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(new1);
