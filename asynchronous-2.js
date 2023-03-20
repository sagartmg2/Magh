
/* synchronous Vs asynchronous */

console.log(1);
console.log(2);

function doSomething() {
    console.log("do something");
}
// setTimeout(<callback>,<time in ms>)
setTimeout(doSomething, 0)
