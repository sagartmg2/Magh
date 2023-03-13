/* condition */


let will_rain = false
let has_probability = true


/*   condition syntax
    if(<condition>){
        // do truthy task 
    }else{
        // do another another
    }

*/



// if (will_rain) {
//     console.log("take umbrella");
// } else {
//     console.log("no need");
// }

/* nested if else |  nested condtions */

// if (will_rain) {
//     console.log("take umbrella");
// } else {
//     if (has_probability) {
//         console.log("you make take it");
//     } else {
//         console.log("no need");
//     }
// }

// if (will_rain) {
//     console.log("take umbrella");
// } else if (has_probability) {
//     console.log("your wish");
// } else {
//     console.log("no need");
// }


/* OPERATORS */

let num1 = 1000  // assignment operator

let first_name = "John"
let last_name = "Doe"
let full_name = first_name + " " + last_name  // in string + is referred as contact operator
// console.log(full_name);


/* 

Arithematic Operator
    + 
    - 
    * // star sign // multiply
    /  divide 
    %  modulous -> returns the remainders
 */


let num2 = 2000
let num3 = num1 + num2  // + in number  ias additional opertoar
console.log({ num3 });


/* logical operator */
/* 
    AND opeartor   &&
    OR opeartor   ||  pipe sign
    NOT opeartor  !  
*/


/* 
    AND
        - compares between two condition  and returns true, if both condition are ture
    OR
        - compares between two condition  and returns true, if any one of the  condition is ture
*/

let enrolled = true
let payment = false
let old_student = true


// if (old_student || (enrolled && payment)) {
//     console.log("can join");
// } else {
//     console.log("can't join");
// }


/* comparision operators */
/*
    >
    <
    >=
    <=
    ==   equality
    ===  strict equality  // this checks data type too
*/


// 1 == "1" // type casting



/* write a program (WAP) to calcualte if a number is even or odd    */  /*concept needed: funciton,  if else,  modulous   */


/* wr */

/* 

    find if a given value is a number if number positive or negative 
     1
     idenfityNumber(-10)
     idenfityNumber("john")
     "John"  //should print => the given data is not a number

     
    - make use of if else 
    - typeof
*/



/* syntax
    if(<condition>){
        // this code run if our condition is true
    }else{
        // this code runs if our condition is false. 
    }

*/


// if (number > 0) {
//     console.log("+ve number");
// } else {
//     console.log("-ve number  ");
// }


// if (number2 > 0) {
//     console.log("+ve number");
// } else {
//     console.log("-ve number  ");
// }

// let number = -10
// let number2 = -20
// let number3 = -20
// let number4 = -20

// function checkWholeNumber(input) {
//     if( typeof(input) == "number"){

//         if (input > 0) {
//             console.log("+ve number");
//         } else {
//             console.log("-ve number  ");
//         }

//     }else{
//         console.log("not a number ");
//     }

// }

function checkWholeNumber(input) {

    if (input > 0) {
        console.log("+ve number");
    } else if (typeof (input) === "number") {
        console.log("-ve number  ");
    }else{
        console.log("not a number");
    }


}

checkWholeNumber(-10)
checkWholeNumber(-28)
checkWholeNumber(100)
checkWholeNumber("john")








