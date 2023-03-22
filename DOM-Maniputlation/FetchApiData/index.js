/* synchronous vs asynchronous */


console.log(1);
console.log(2);
console.log(3);


// setTimeout(doSomeTask, 5000)
/* 
    asynchonous
     - runs in backgorund 
     - doesnot block the codes below
     - events that happen in future
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("promise-fulfilled")
        reject("server error")
    }, 2000)
})

console.log(promise1);

promise1.then(response => {
    console.log(response);
}).catch(err => {
    console.log("error");
})


/* promises 
    - pending
    - resolved
    - reject
*/


for (let index = 0; index < 10; index++) {
    console.log({ index });
}

function doSomeTask(params) {
    console.log("task-done");
}