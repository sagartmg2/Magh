
console.log(1);
console.log(2);
console.log(3);

function changeTheme() {
    console.log("change theme");
}


setTimeout(changeTheme, 5000) // asynchronous tasks // which runs in backround // which donot stop the execution of following tasks.. 

for (let index = 0; index < 100; index++) {
    console.log({ index });
}


