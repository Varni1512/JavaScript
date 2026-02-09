console.log(Math);
// negative value to positive mai kar deta hai
console.log(Math.abs(-4));

//roundof kar deta hai value ko
console.log(Math.round(4.6)); //5

//round of kar deta hai lekin max vali value dega 
console.log(Math.ceil(4.2)); //5

//round of kar deta hai lekin lower vali value dega
console.log(Math.floor(4.6)); //4

//find the min value 
console.log(Math.min(4,3,6,8,10));

//find the max value
console.log(Math.max(4,3,6,8,10));

//random value find karne ke liye -> value always between 0 & 1
console.log(Math.random());

//value ko 0. ki jaga 1., 4.  esa dikhanae
console.log((Math.random() * 10) + 1);

//value kabhi kabhi 0.0 bhi aati hai to 0 na aaye uske liye +1 and floor ka use kar ke always lower value milega
console.log(Math.floor(Math.random()*10) + 1);


//if agar 2 number ke bitch mai hi chaiye to
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


