

// "Task-1 is  false"
// "Task-2 is  false"
// .
// .
// "Task-5 is true"


let task1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

let task2 = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
}

let task3 = {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
}

let task4 = {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
}

let task5 = {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": true
}
console.log("______________");


console.log(`Task-${task1.id} is ${task1.completed}`)
// console.log(`Task-${task2.id} is ${task2.completed}`)
// console.log(`Task-${task3.id} is ${task3.completed}`)
// console.log(`Task-${task4.id} is ${task4.completed}`)
// console.log(`Task-${task5.id} is ${task5.completed}`)
console.log("______________");


// console.log(`${task1.title} is ${task1.completed}`)
// console.log(`${task2.title} is ${task2.completed}`)
// console.log(`${task3.title} is ${task3.completed}`)
// console.log(`${task4.title} is ${task4.completed}`)
// console.log(`${task5.title} is ${task5.completed}`)


/* 
    WAP to calcuate sum of 1 and 2  and its douuble is 6 
    WAP to calcuate sum of 1 and 3 
    WAP to calcuate sum of 2 and 3 
    WAP to calcuate sum of 2 and 2 

    the sum of 1 and 2 is 3
    the sum of 1 and 3 is 4
    // 1 + 2 = 3
*/
console.log("______________");
// console.log(`The sum of  ${1} and ${2} is ${1 + 2} and its double is ${2 * (1 + 2)}`);
// console.log(`The sum of  ${1} and ${3} is ${1 + 3} and its double is ${2 * (1 + 2)}`);
// console.log(`The sum of  ${2} and ${3} is ${2 + 3} and its double is ${2 * (1 + 2)}`);
// console.log(`The sum of  ${2} and ${2} is ${2 + 2} and its double is ${2 * (1 + 2)}`);
// console.log(`The sum of  ${2} and ${2} is ${2 + 2} and its double is ${2 * (1 + 2)}`);
// console.log(`the sum of  ${2} and ${2} is ${2 + 2} and its double is ${2 * (1 + 2)}`);
// console.log(`the sum of  ${2} and ${2} is ${2 + 2} and its double is ${2 * (1 + 2)}`);
// console.log(`the sum of  ${4} and ${2} is ${4 + 2} and its double is ${2 * (1 + 2)}`);


/* 

    DRY - donot repeat yourself

*/

/* Function  - performs a certainn task  */

/*current:  sumAndDouble */


/* function syntax

    to create a function  // decleare 

    function <functionName>(paramater1,paramter2,.........){
        // do your task here..
    }


    excecute | call  a function 



*/



function sumAndDouble(num1, num2) {
    // console.log("num1", num1);
    // console.log("num2", num2);
    console.log(`The sum of  ${num1} and ${num2} is ${num1 + num2} and its double is ${2 * (num1 + num2)}`);
}


// sumAndDouble(1, 2) // 1,2 here is referred as arguemenet

// sumAndDouble(2, 2) //2,2 

// sumAndDouble(3, 3) // 3,3

// sumAndDouble(2, 5) // 2,5



/* WAP to find the difference of two numbers  10 5 */
/* WAP to find the difference of two numbers  100 50 */
/* WAP to find the difference of two numbers  100 10 */
/* WAP to find the difference of two numbers  100 20 */
/* WAP to find the difference of two numbers  100 30 */


// console.log(`The difference of ${100} and ${50} is ${100 - 50}`);
// console.log(`The difference of ${100} and ${10} is ${100 - 10}`);
// console.log(`The difference of ${100} and ${20} is ${100 - 20}`);
// console.log(`The difference of ${100} and ${30} is ${100 - 30}`);



// function differentiate(parameter1,parameter2) {
function differentiate(num1, num2) {
    // console.log(`The difference of ${100} and ${50} is ${100 - 50}`);
    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}


differentiate(100, 50); // 100, 50 are arguements // calling a funciton or executing a fuction 
differentiate(100, 40);
differentiate(200, 100);
differentiate(10, 5);










