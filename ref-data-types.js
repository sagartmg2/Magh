/* number, string, null, undefined, boolean */


// let num1 = 100
// let num2 = num1
// num2 = 200

// console.log({ num1 });
// console.log({ num2 });

// let name1 = "ram"
// let name2 = name1
// name2 = "john doe "

// console.log({ name1 });
// console.log({ name2 });

/* 
    reference data types 
    - object
    - array 

*/

let person_1 = {
    name: "ram",
    age: 12,
    address: {
        street: " putalisadak",
        zip: 44600
    }
}

// let person_2 = person_1 //  in person2 , js stores the location of person1's value location 



let person_2 = { ...person_1 } // ...is spread operator // -> copies the value of person-1 in person0-2 variable
person_2.name = "JOHN DOE"



console.log(person_1);
console.log(person_2);


let brands = ["apple", "smanug", "lg"]


let brands_two = brands // instead of copying the values of brands vairable , javascript instead stores the location of brands variable in brands_two


brands_two = [...brands]
brands_two[3] = "sony"

console.log(brands);
console.log(brands_two);








