// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let arr = [1, 2, 3]
/* 
    in index 0, we have 1 
    in index 1, we have 2 
    .
    .
    in index 9, we have  10

 */

// function printSomeWord(element, index) {
//     console.log(`in index ${index}, we have `, element);
//     return 100;
// }

const printSomeWord = (element, index) => {
    console.log(`in index ${index}, we have `, element);
}

/* callback
    - a funciton passed to another function as varaible
*/

/* do call the function in forEach */
// arr.forEach(printSomeWord()) // arr.forEach(100)

// instead pass  the name only

// arr.forEach(printSomeWord)
// arr.forEach((elment, index) => { console.log(`in index ${index}, we have ${elment} `); })

// let arr2 = null

// arr.forEach(printSomeWord)
// arr.forEach(  (elment,index)=>{  }  )

// const dobuleTheValue = (element, index) => {
//     // console.log(`in index ${index}, we have `, element);
//     arr[index] =  element * 2

// }


// arr.forEach(dobuleTheValue)
// arr.forEach( (element,index) => {
//     arr[index] =  element * 2
// })

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let arr2 = arr.map((element, index) => { return element * 2 })
// let arr2 = arr.map((element) => element * 2)

let arr2 = arr.filter((element, index) => {
    console.log("element", element)
})



console.log(arr);
console.log(arr2);














// function sum(){
//     return 3;
// }

// const sum = () => {
//     return 3
// }


// const sum = () => 3

// console.log(sum());



















// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr[3] = 4
// arr.push("new-element")

// arr[0] = 0;
// arr.push(4)
// arr.unshift(0)
// arr.pop()
// arr.shift()

// arr.splice(2, 1, 3, 4)

// let arr2 = arr.slice(0, 3)
// console.log(arr);
// console.log(arr2);
