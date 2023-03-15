/* 

    8 x 1 = 8
    8 x 2 = 16
    ..

    8 x 10 = 80

*/




// calcualte(5, 1, 6)
// calcualte(10, 1, 6)




// console.log(1);
// console.log(2);
// console.log(3);

// for (iniital_value ; condition ;mutator){
//      code here... 
// }


// for (let number = 1; number <= 4; number++) {
//     console.log(number);
// }

// calculate the sum of two numbers
// 1, 2
// 1, 2213
// 1, 22132345
// 1, 22132345453

// console.log(1 + 2);
// console.log(1 + 3);
// console.log(1 + 4);

function sum(num1, num2) {

    return num1 + num2
    console.log("print after return ");
}

let num1 = 1;
let num2 = 2;

let result = sum(num1, num2)  // 3


// 3  + 10 
// let result2 = sum(result, 10)

let result2 = sum(  sum(num1, num2)    , 10)
// let result2 = sum(    3   ,   10   )

console.log({ result2 });




