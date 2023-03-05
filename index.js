

let name; // 
nmae = "js"

let age = 10;
let status = true


let course;
console.log("couse is " + course);

/*  primiteive  Data types
    String
    Number 
    Boolean
    undefined
    null
*/

/* 
    non-primitive data types // collection // reference data types
    - Array
    - Object 
*/

let data = null; // explicitely defining value as none  , no existance
console.log(data);


let brand1 = "puma"
let brand2 = "levis"
let brand3 = "adidas"



// let brands = "puma", "levis"  xx this is not possible
// let ages =  50, 50 //  xx this is not possible

/* 
    Array
        - collection of different values
        - usually it is a collection of similar data types

        elements
        index  // always start with 0

        syntax 
        let <array_name> = [ <value>,<value>,<value>,......  ]

        read as
        let <array_name> = [ 1stelement, 2ndelement, ...........  ]
        or
        let <array_name> = [0thindex, 1stindex, 2ndindex, ...........  ]


*/

let brands = ["levis", "puma", "adidas"]
// console.log("old brands", brands);
// // console.log("0th index value of brands is " + brands[0]);
// console.log("1st index", brands[1]);
// console.log("3st index", brands[3]);

brands[1] = "nike"
brands[3] = "puma"

// console.log("new_brands", brands);
// console.log("new_brands", brands[0]);


// console.log(brands[2]);
// console.log(brands[3]);

/* 
    reading array values => we can use index 
    mutate/ change /update array values => use index
 
*/


// let ages = [20, 11, 10, 100, "hundred", undefined, { name: "ram", age: 12 }]
// console.log(ages);

/* object
    just like real life objects having different properties
 
    <object_name> = {
        <key | attribute | property > : <value>,
        <key | attribute | property > : <value>,
        <key | attribute | property > : <value>,
    }
 
 */


let bottle = {
    // "<key>" : "<value>"
    unit: "cm",
    height: 15,
}


let projector = {
    color: "black",
    model: "vx-100",
    brand: "samssung"
}

let person1 = {
    name: "Ram",
    age: 12,
    courses: ["mern", "ux"]
}

let person2 = {
    name: "Hari",
    age: 17
}
console.log(["nike", "puma"]);
console.log(projector);
console.log("the old_brand is ", projector.brand);
console.log("the oldcolor is ", projector.color);
projector.color = "white" // mutate/update/  re-initializting object property
console.log("the new color is ", projector.color);

let number = {
    "1": "one",
    2: "one",
    "one": 1,
}

console.log(number);
console.log(number.one);

let persons = [person1, person2]
console.log(persons);