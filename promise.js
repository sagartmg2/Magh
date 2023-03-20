/* Error handling try catch */


let a = 1 + 2

function insertInDatabase() {
    // let c = a + b
    let c = a + 12
    console.log("data - inserted");
}


try {
    // insertInDatabase()
} catch (err) {
    // console.log(err);
    console.log(err.message);
    console.log("certain error occured");
}


/* insertin in database  */

// console.log("do some ohter task", a);



// let promise1 = new Promise(<callback function >)

/*
Promise States
    pending
    resolved | fulfilled
    reject
*/

let promise1 = new Promise((resolve, reject) => {

    try {

        function sendProducts() {
            let proudcts = Database.fetchProduct()
            setTimeout(() => {
                resolve([{ name: "produ-1" }])
            }, 2000)

        }

        sendProducts();

    } catch (err) {
        reject("server error")
    }

})

console.log(promise1);


// axios.get("https:products").then(res =>{}).catch(err => {})

promise1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})

console.log("after promise");




