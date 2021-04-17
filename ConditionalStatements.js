//  == vs === comparisson operator

const shouldSayHi= true;

if (shouldSayHi=== true){

    console.log("Hi");
}
const numberFive=5;
console.log(typeof numberFive);

const stringFive="5";
console.log(typeof stringFive);

if(stringFive==numberFive){

    console.log("Im a fool");
}

if(stringFive===numberFive){

    console.log("You are a fool");
}
else{

    console.log("JS is the most hated language");
}

// == only checks for eqaulity === checks equality as well as the equalty of data type

//USing Objects

const arr1=[1,3234,555,6];
const arr2=[1,3234,555,6];

console.log(arr1==arr2)// false
console.log(arr1===arr2)// false

// This is beacuse even though the elements are same array objects are differnt
//But if we assign reference the arr1 to arr2 the output will differ

arr3=arr1;
console.log(arr1==arr3)// true
console.log(arr1===arr3)// true

let obj1={
    name:"Manakal",
    age: 24
};

let obj2={
    name:"Manakal",
    age: 24
}

console.log(obj1==obj2)// false
console.log(obj1===obj2)// false

let obj3=obj1;

console.log(obj3==obj1)// true
console.log(obj3===obj1)// true