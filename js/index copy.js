

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



// "Task-1 is  false"
// "Task-2 is  false"
// .
// .
// "Task-5 is true"

// console.log(`Task-${task1.id} is ${task1.completed}`)
// console.log(`Task-${task2.id} is ${task2.completed}`)
// console.log(`Task-${task3.id} is ${task3.completed}`)
// console.log(`Task-${task4.id} is ${task4.completed}`)
// console.log(`Task-${task5.id} is ${task5.completed}`)

/* 
    let task =  task1 
    let task =  task2 
    let task =  task3 
*/
function printStatus(task) {
    // console.log(task);
    // console.log("\n");
    // console.log(`Task-${task.id} is ${task.completed}`)
    console.log(`Task-${task.id} is ${task.completed}`)
    console.log(`Task-${task.title} is ${task.completed}`)
    console.log("\n");
}

printStatus(task1, "id")
printStatus(task2, "title")
printStatus(task3, "id")

/* research -> arrow function  */









