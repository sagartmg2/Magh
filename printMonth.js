let month = 1


/* output
     1 - janurar
     ..
     ..
     .
      12 - decembera


      if  gereatr than 12 and less than 0 or  not a nubmer
      print invalid iput
*/

// printMonth(1)
// printMonth(2)


// if (month == 1) {
//       console.log("january");
// } else if (month == 2) {
//       console.log("feb ");
// }

// function checkMonth(input) {
//       if (input === 1) {
//             console.log("Jan")
//       } else if (input === 2) {
//             console.log("Feb");
//       } else if (input === 3) {
//             console.log("Mar");
//       } else if (input === 4) {
//             console.log("Apr");
//       } else if (input === 5) {
//             console.log("May");
//       } else if (input === 6) {
//             console.log('Jun');
//       } else if (input === 7) {
//             console.log('Jul');
//       } else if (input === 8) {
//             console.log('Aug');
//       } else if (input === 9) {
//             console.log('Sep');
//       } else if (input === 10) {
//             console.log('Oct');
//       } else if (input === 11) {
//             console.log('Nov');
//       } else if (input === 12) {
//             console.log('Dec');
//       } else {
//             console.log("Please confirm Invalid Month");
//       }
// }


function checkMonth(input) {

      /*  
      switch(value){
             case <condition> : {
                  // do your task 
             }
       }
       */

      let month_name = ""

      switch (input) {
            case 1: {  // if(input === 1 )
                  month_name = "JAN"
                  console.log("inside case 1 ");
                  break;
            }
            case 2: { // if (input === 2)
                  month_name = "FEB"
                  console.log("inside case 2 ");
                  break;
            }
            case 12: {
                  month_name = "DEC"
                  console.log("inside case 12 ");
                  break;
            }
            default: {
                  console.log("please input vlaid number 1 - 12 ")
            }
      }

      /*    
            Falsy values

      */

      if(month_name){
            console.log({ month_name });
      }


}


checkMonth(2)

let can_marriage = false

// if (<contion>) {}

// if (can_marriage) {
//       console.log("he can marry");
// } else {
//       console.log("he can't marray ");
// }


// let condition = true




let condition = {}


// if (condition) {
//       console.log("the give condition is true");
// } else {
//       console.log("false falsze false ");
// }

/*
      falsy values
            false
            0
            null
            undefined
            NaN
            ""


*/


// let name = "ram"

// console.log(name);
// console.log("ram");





