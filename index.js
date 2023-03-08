/* 
    string
    number
    boolean
    undefined
    null
*/

/* 
    reference datypes // collections 
    array 
        - collection of different values
        - Index  - always starts with 0 
    object
*/

/* 
    samsung, apple , lg 
*/
let brand1 = "samsung"
brand1 = "apple" // re-initialization
let brand2 = "lg"

let brands = [brand1, "aplple", brand2]

console.log(brands);



let names = ["john", "ram", "hari"]
console.log(names);
names[1] = "SITA"
console.log("in 1st index we have", names[1]);
console.log("in 3rd index we have", names[3]);


/* object
    syntax
    let <object_name>  = {
        <key | property  | attribute> : <value>
    }

*/

let projector = {
    color: "black",
    resolution: "1990",
    length: "40cm",
    price: 50000,
    port_count: 5,
    has_hdmi: true,
}

console.log(projector);
projector.color = "white"
console.log("the color is ", projector.color);
console.log("the nubmer of ports is \n", projector.port_count + ".");
let num1 = num2 + num3


let colors = ["red", "blue", true, null, undefined, [], { color: "red" }]
console.log({ colors });























