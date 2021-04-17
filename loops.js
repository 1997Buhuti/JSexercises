//Loops

//while loop demo
/*
let names=['Manakal','Joe','Porchaska','Alan','Jhonny','Clifford','Devoe','Burammpi']

const NameFinder= (names,name)=>{
    let index=0
    while(index<names.length){
        if(names[index]===name){
            console.log(name+' you SOB your index is '+index)
            break
        }
        index++
    }
}

NameFinder(names,'Alan')

//Do while loop

const greeter= (name)=>{

    let input=prompt('Please enter y to continue')
   do {
        console.log('Subha aluth awruddak wewa '+name+" obata")

    } while(input==='y')
}

//for loop Demo

let iceCreams=['Chcolate','Vanila','Strawberry']

for (var i=0;i<3;i++){
    console.log(iceCreams[i])
}

//print fuck for all the multiples of 3 fromm 1 to 100

for(let i=0;i<100;i++){
    if(i%3==0){
        console.log('fuck')
    }
    else{
        console.log(i)
    }
}

//Using labels for nested loops (Can be used specialy when using break command)

outer: //label1
for(let i=0;i<10;i++){
    inner: //label2
    for(let j=0;j<5;j++){
        console.log('i='+i+' j='+j);
        if(j===3){
            break outer;
        }
    }
}

//setTimeout Function

setTimeout(function(){
    console.log('after 1 S biatch')
},1000);

//using loops

for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log('i='+i)
    },i*500);
}//Display i=10 10 times. It's beacuse var is function scoped and it's been hoisted the for loop executs before settimeout function

//Solution Use block scoped variable let

for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log('i='+i)
    },i*1000);
}
*/

//for in loops  (Loops through object properties in an arbitrary order)

const obj1={1:'Buhuti', 2:'24', 3:'UOK', 4:'Student'}
for (const [prop] in  obj1) {
    if (Object.hasOwnProperty.call( obj1, [prop])) {
        console.log( obj1[[prop]]);
        
    }
}

//for each loop (Suitable for arrays) 
//cons:- break and continue doesnt work

const arr=['Amal','Kamal','Nimal','Sunimal']

arr.forEach(element => {
    console.log(element)
});

//for of loops
/*
    New loop in ES6 used to loop over iterable 
    objects (arrays,strings,maps,sets etc.)

    pros:- Support break and continue keywords
*/


const drinks=['Coke','Pepsi','Kasippu','Tea','Ra']
for (const iterator of drinks) {
    console.log(iterator);
}