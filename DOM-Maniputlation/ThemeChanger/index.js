


console.log("js liknked ");

console.log(document.getElementById("darkButton"))





// document.getElementById("darkButton").addEventListener("click", () => {
//     document.getElementsByTagName("body")[0].classList.add("dark")
// })

// document.getElementById("lightButton").addEventListener("click", () => {
//     document.getElementsByTagName("body")[0].classList.remove("dark")
// })

let default_teheme = "light"


document.getElementById("toggleThemeButton").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList.toggle("dark")
    
    if (default_teheme !== "light") {
        default_teheme = "light"
    } else {
        default_teheme = "dark"
    }
    document.getElementById("toggleThemeButton").innerText = default_teheme

})





























// document.getElementById("darkButton").addEventListener("click", () => {
//     document.getElementById("body").classList.add("dark")
//     document.getElementById("darkButton").classList.add("notactive")
//     document.getElementById("lightButton").classList.add("active")

// })

// document.getElementById("lightButton").addEventListener("click", () => {
//     document.getElementById("body").classList.remove("dark")
//     document.getElementById("darkButton").classList.remove("notactive")
//     document.getElementById("lightButton").classList.remove("active")

// })