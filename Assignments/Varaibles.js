/*
Author: D.P.B Manakal
date:27/03/2021
*/


/* 

    Diffference between let const and var

    --Var--

    var is used to declare variable in earlier versions of javascript before es6
    var is function scoped when it is declared within a function. This means that 
    it is available and can be accessed only within that function.var variables can be 
    re-declared and updated.

    --let--

    let is now preferred for variable declaration in es6 if the variable isn't a 
    constant. Unlike var let is block scoped.

    --const--
    Variables declared with the const maintain constant values. These are
    also block scoped. const values cannot be updated or re-declared

    --hoisting--
    Hoisting is a JavaScript mechanism where variables and function declarations 
    are moved to the top of their scope before code execution. 

*/

//var demo 
//here the variable greeter is redifined into say Hello instead
var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter)

// let demo
// here the variable greeter doesnt get redifined. 
//Both variables belongs to their own block scopes.

let greeter2 = "hey hi";
    let times2 = 4;

    if (times2 > 3) {
        let greeter2 = "say Hello instead";
        console.log("inside if",greeter2) 
    }
    
    console.log(greeter2)

//const demo

const greeting = "say Hi";
//greeting = "say Hello instead";
// error: Assignment to constant variable. 
