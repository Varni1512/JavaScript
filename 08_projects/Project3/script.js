//generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF'; //const mai value change nhi kar sakte
    let color = "#"; // let mai value change kar sakte hai
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalID;
const startchanging = function () {
    if (intervalID == null) {
        intervalID = setInterval(changebg, 1000);
    }

    function changebg() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopchanging = function () {
    clearInterval(intervalID);
    intervalID = null;
}
document.querySelector('#start').addEventListener('click', startchanging);
document.querySelector('#stop').addEventListener('click', stopchanging);
