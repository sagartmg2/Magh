/* output

    tado-1 is  incomplete
    task-2 is  compolete
    .
    .
    .

*/

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "status": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "status": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "status": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "status": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "status": false
    },
]






// if (todos[1].completed) {
//     console.log(`todo-${todos[1].id} is completed  `);
// } else {
//     console.log(`todo-${todos[1].id} is incomple `);
// }

// if (todos[2].completed) {
//     console.log(`todo-${todos[2].id} is completed  `);
// } else {
//     console.log(`todo-${todos[2].id} is incomple `);
// }



/* in 1st function call, let index = 0 */
/* in 2nd function call ,  let index = 1 */

// function printStatus(index) {
//     if (todos[index].status) {
//         console.log(`todo-${todos[index].id} is completed  `);
//     } else {
//         console.log(`todo-${todos[index].id} is incomple `);
//     }
// }


// TERNARY OPERATOR

function printStatus(index) {
    // if (todos[index].status) {
    //     console.log(`todo-${todos[index].id} is completed  `);
    // } else {
    //     console.log(`todo-${todos[index].id} is incomple `);
    // }

    console.log(`the todo-${todos[index].id}  is ${todos[index].status ? "completed" : "incomplete"}`);

}

// printStatus(0) // 0 is index , is also funcational  arguement, parameter
// printStatus(1)
// printStatus(2)


// for (let index = 0; index < 5; index++) {
for (let index = 0; index < todos.length; index++) {
    printStatus(index)
}


let status = true;

// if(status){
//     console.log(`the status is completed`);
// }else{
//     console.log(`the status is incompleted`);
// }

// console.log(`the status is ${status ? "completed" : "incomplete"}`);





/* 

WAP to caluclate sum of two digits 1 and 2
WAP to caluclate sum of two digits 1 and 242
WAP to caluclate sum of two digits 1 and 2223
WAP to caluclate sum of two digits 1 and 224
WAP to caluclate sum of two digits 1 and 25
WAP to caluclate sum of two digits 1 and 2467
WAP to caluclate sum of two digits 1 and 2567
WAP to caluclate sum of two digits 1 and 2789

*/




let num1 = 1;
// num1 = num1 + 2
// num1 += 2

// ++num1  // 2
// num1++  // 3


// console.log(++num1, num1);
// console.log(num1++, num1);

/* 
    pre increment vs post increment
    prev-increment
        - incremnts the value, we can see the result instantly. 
    post-increment
        - incremnts the value, we can't see the result instantly. 

*/



/* print from 1 - to 10 */

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



/*
 LOOP
    - for loop
    - while loop
    - do while loop
 */

console.log("loop-stared");

// for (initial_value , condition, incrementer ) {   }
for (let index = 1; index < 3; index++) {
    console.log("loop", index);
}


console.log("loop-ended");










