
/* synchronous Vs asynchronous */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

function sum() {
    return 1 + 2
}

function doSomething() {
    console.log("do something");
}

/* asynchronous
        - it donot get executed immediately,and takes some time
        - tasks that run in background
        -
*/

// setTimeout(<callback>,<time in ms>)
setTimeout(doSomething, 0)

for (let i = 0; i < 1000; i++) {
    console.log({ i });
}

console.log("the sum is ", sum());

/* 
    asynchronous

*/

