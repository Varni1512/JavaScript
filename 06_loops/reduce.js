const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)

//using the arrow function
const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 499
    },
    {
        itemName: "python course",
        price: 699
    },
    {
        itemName: ".net course",
        price: 9999
    }
]

const priceTOPay = shoppingCart.reduce((acc, item)=> acc + item.price,0)

console.log(priceTOPay);
