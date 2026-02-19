//promise 1
const promise1 = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promise1.then(function () {
    console.log("promise consumed");
})

//promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

//promise 3 
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "varni", email: "varni12@gmail.com" })
    }, 1000)
})

promise3.then(function (user) {
    console.log(user);
})

//promise 4
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "varni", password: "12456" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (err) {
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"))

//promise 5
const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "js", password: "12456" })
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function comsumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

comsumePromise5()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUser()