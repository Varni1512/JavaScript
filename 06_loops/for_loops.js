// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

// multiple for loop

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value: ${j}`);
    }
}


let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//break

for (let i = 0; i <= 10; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

//continue

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}