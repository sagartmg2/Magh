

// document.getElementById("btn")?.addEventListener("click",() =>{
//     console.log("inside event listedner");
//     changeBackgroundColor()
// })

// alert("")


function changeBackgroundColor() {
    console.log("change color");

    let body = document.getElementById("body")

    body = document.getElementsByTagName("body")[0]

    body = document.querySelector("#body")

    let colors = ["red", "orange", "yellow"]

    /* you me use 
    Math.random()
        0.4917517111920282
        Math.random()
        0.6336855734917259
        Math.random()
        0.8622748867567567
        Math.random() * 3
        2.0207443799489813

        Math.floor(1.1212)
        1
        Math.ceil(1.1212)
        2

 */
    body.style.backgroundColor = "red"
}