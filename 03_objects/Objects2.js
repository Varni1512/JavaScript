const tinderUser = new Object() //singleton object

const tinder = {} // non singleton object

tinder.id = "123"
tinder.name = "varni"
tinder.email = "varni13@gmail.com"

// console.log(tinder);

const regular ={
    email: "varni123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "varni",
            lastname: "patel"
        }
    }
}

// console.log(regular.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2}
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) // right way to combine 
// console.log(obj4);

const obj5 = {...obj1,...obj2}
// console.log(obj5);

const user = [
    {
        id: 1,
        email: "varni1@gmail.com"
    },
    {
        id: 2,
        email: "varni12@gmail.com"
    },
    {
        id: 3,
        email: "varni123@gmail.com"
    }
]

user[1].email

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "varni"
}

const {courseInstructor} = course
const {courseInstructor : instructor} = course

console.log(courseInstructor);
console.log(instructor);
