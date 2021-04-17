//functions
// Function is a reusable piece of code where can call anywhere withn the code
//to perform a particular task or function

var shit=function sayHi(){ 
    console.log('Hi Buhuti')
}

console.log(shit)

//Problem of hoisting

const myName="Buhuti"

function sayHi2(){
    if(!myName){
        var myName="Siripala"
    }
    console.log('Hello '+myName)
}
//expected output was Hello Buhuti but the output is Hello Siripala due to hoisting
sayHi2()

//Solution use a pure function

function sayHi3(myName){
    if(!myName){
        var myName="Siripala"
    }
    console.log('Hello '+myName)
}

sayHi3('Buhuti')

//Anonymous Function
//Why? -> we can easily pass function as argument, hoisting works differntly(previous problem doesnt ocur)

var sayBye= function(myName){
    if(!myName){
        var myName="Siripala"
    }
    console.log('Hello '+myName)
}

const squareNumber= function(num){
    return num*num
}

//Here we are passing squaring function as a param(sqr) to numberAdder function

const numberAdder= function(sqr,number){
    const squredNum=sqr(4)
    return squredNum+number
    
    //console.log('insider func'+squareNumber(10)); Unreachable code
}

console.log(numberAdder(squareNumber,10))//passing function an number as arguments
// one benefit of annonymous function

//pure function example 2

let myString="I'm Crazy"

const stupidfunc=function(string){
    return string+"Buhuti"
}

console.log(stupidfunc(myString))// passing myString but the function doesnt change it's original value

console.log(myString)//myString haven't changed

//impure function

var myInfo={ name:"Buhuti" , age:24}
console.log('before calling func '+myInfo.age)
const changeAge=function(obj){
    return obj.age+=10;
}

console.log(changeAge(myInfo))
console.log('after calling func '+myInfo.age)

//pure function 2

let myNumber= 100;
function addTwenty(num){
    return num+20;
}

console.log(addTwenty(myNumber))
console.log(myNumber)

//Nested Functions (Closures)

/*
1) What is a Closure?

A closure is a function that has access to its outer function scope even after the outer function has returned. 
This means a closure can remember and access variables and arguments of its outer function even after 
the function has finished.

2) What is a Lexical Scope?
A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions, 
and objects based on their physical location in the source code.

*/
function squareAndMultiply(num1,num2) {

    function multiplyBy10(x){
        return x*10
    }

    function squarer(y){
        return y*10
    }

    return squarer(num1)*multiplyBy10(num2)
}

console.log(squareAndMultiply(10,2))

//ex:-2
function personCreator(fname,lname,age){

    function nameformatter(n1,n2){
        return n1+" "+n2;
    }

    function personObjCreator(name,age){

        const person={
            Person_Name:name,
            Person_age:age
        }
        return person;
    }

    const name=nameformatter(fname,lname,age)
    const person=personObjCreator(name,age)

    return person
}

const Student= personCreator('Buhuti','Manakal',24)

console.log(typeof Student)
console.log(Student)

//example 03
function person() {
    let name = 'Peter';
    
    return function displayName() {
      console.log(name);
    };
  }
  let peter = person();
  peter(); // prints 'Peter'

//example 04

function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  let count = getCounter();
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2


  // Arrow Functions

  const number= function(num1,num2){
      return num1*num2
  }

  //ES 6

  const number2= (num1,num2)=>{return num1*num2}
  console.log(number2(10,10))

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.

const user=[
    {name:'Manakal',age:24},
    {name:'Sirimewan',age:13},
    {name:'Tharaka',age:14}
]

const jilBoys= user.map((boy)=>boy.name) //es6 understands that it have to return.. so we do not need to explicitly define it.
console.log(jilBoys)

//ex2

const numbers=[10,23,11,45,60,100,4,6,73]

const eveNumbers=numbers.filter((num)=> num%2===0)

console.log("here are the even numbers of array numbers")
console.log(eveNumbers)

//ex 3 how to to create a new numbers array with same numbers squared

const squared=(numArray) =>{

    const numAr=[];
    numbers.forEach(e => {
        numAr.push(e*e)
    });
    return numAr
}

console.log(squared(numbers))

//default values for function

const multiplier=(num=10,num2=10)=>num*num2
// This function multiplies 2 numbers if the parameters are not provided default params 10 is taken

console.log(multiplier(3,3))//9
console.log(multiplier(4))//40
console.log(multiplier())//100

//ex2 : default values (Using objects)


function bankAccount (spendMoney,bal){
    this.anSpendMoney=spendMoney,
    this.balance=bal
}
    
const Account= new bankAccount(true,1000)

function buyItem(price,account=Account){
    if(account.balance<price||account.canSpendMoney===true){
        return false
    }
    account.balance-=price
    return true
}

console.log(buyItem(1900))//false
console.log(buyItem(200))//true

let account= new bankAccount(false,350)
console.log(typeof account)
console.log(buyItem(200,account))//false

//REST parameters 
//If we don't know the actual number of params we can use REST params

function multiply(x, ...num){
    return num.map((n)=>{
        return x*n
    })

}

console.log(multiply(10,2,34,56,7,4)) 

//Immediately Invoked Function Expressions pattern (IIFEs)- You can invoke function immediately after declaration without calling

console.log((earthweight => earthweight * 0.38)(100))
//The parentheses surrounding the function definition lets JavaScript know that it will process a function expression. 
//The last pair of parentheses invoke the function.

/*

The most common use cases for IIFEs are:
Angular 8 
x=0;u
Aliasing global variables
Creating private variables and functions
Asynchronous functions in loops

*/


