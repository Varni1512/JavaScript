//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

((port) => {
    console.log(`DB Connected ${port}`);
})(200)