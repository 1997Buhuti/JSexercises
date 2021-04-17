// Variables
// --A place holder that holds data

var myName="Buhuti";
var myFavNum=34;
var myArray=[1,2,44,56,"sdsd","super"];

var obj={

    name:"Superman",
    superPower:"Super Strength"
}

function sayHi(){

    console.log("Hi "+myName);
}

sayHi();

//ES6

//var (Functional scoped)

function sayHi2(){

    var shouldSayHi=true;
    if(shouldSayHi){

        var myName1="Manakal";
        //console.log("Hi "+myName);
    }
    console.log("Hi my name is "+myName1);
}

sayHi2();
// Using let keyword (Block Scoped)

function sayHi2(){

    let shouldSayHi=true;
    if(shouldSayHi){

        let  myName2="Manakal";
        //console.log("Hi "+myName);
    }
    console.log("Hi "+myName2); // displays an error
}

//Using const keyowrd (Blocked Scoped and cannot be reassigned)

/*
function sayHi3(){
    let shouldSayHi=false;
    const myName3="Chris";

    if(shouldSayHi===true){
        myName3="chris";
        console.log("Hi"+" "+myName3);
    }

    else{

        myName3="Bob";
        console.log("Hi"+" "+myName3);
    }
}
This code will generate error becuase you cannot assign a new value t variable
Myname3 once a value is assigned.
*/

//const using arrays

const myArray=[12,114,556];
console.log(myArray);

//myArray=[122,44,66,77]; illegal
myArray.push(100);// legal
myArray.pop// legal

//const using objects

const myObj={
    name:"Randy",
    age:34
}

console.log(myObj.name);
// myObj.name="Sira"; illegal