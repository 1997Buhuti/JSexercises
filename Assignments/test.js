/*Basics
*/
console.log(10+6);
console.log(Math.PI);
console.log(parseInt("not a number"));
console.log(parseInt("12008"));

//Strings
//Sequance of unicode characters

console.log("Hello Biatch");
console.log("Hello Biatch".length);// count the length of a string
console.log("Hello Biatch".charAt(3));

//Booleans
var arr=new Array;
var a;
for(a=1;a<=100;a++){
    arr[a]=a;
}

arr.pop;
arr.pop;
arr.pop;
for(a=1;a<=100;a++){
    if(arr[a]!==a){

        console.log(a+"th number is missing");
        break;
    }
    
}
console.log(arr);

//Objects (Collection of value pairs)

//method 1
var myObj= new Object();
myObj['1']="Chris";
console.log(myObj);

myObj['2']="Bob";
console.log(myObj);

myObj['3']="Randy";
console.log(myObj);

// method 2
var myOtherObject={
    1:"Chris",
    2:"Sally",
    3:"Bob",
    4:"Billy"
};

console.log(myOtherObject);

var anotherObject={

    name:"Buhuti",
    age:24,
    university:"UOK",
    stuNo:"HS/2016/0693"
};

console.log(anotherObject);

//nested object

var anotherObject2={

    name:"Buhuti",
    age:24,
    university:"UOK",
    stuNo:"HS/2016/0693",
    phoneNo: {
        home: "031-7911919",
        mobile:"0767455600"
    }
};
console.log(anotherObject2.phoneNo);
console.log(anotherObject2.phoneNo.mobile);

var kottu={

    type: "Cheese",
    weight:300,
    price: 400.00,

    sayType: function typeFunc(){
        console.log("Type= "+this.type);
    },

    isSalty: function checkSalt(){
        console.log("this is "+this.type+" Kottu and it's Salty");
    }
};

console.log(kottu);
console.log(kottu.sayType());
console.log(kottu.isSalty());

//Object Reusability (Constructor Pattern)

function kottuConstructor(type,weight,price){

    this.type=type;
    this.weight=weight;
    this.price=price;
    this.sayType=function typeFunc(){
        console.log("Type= "+this.type);
    },

    this.isSalty=function checkSalt(){
        console.log("this is "+this.type+" Kottu and it's Salty");
    }
}

//Creating multiple objects from kottu Constructor

var myKottu= new kottuConstructor("Cheese",400,600.00);

console.log(myKottu);
myKottu.isSalty();

var familyKottu= new kottuConstructor("Dolphin",700,850.00);
familyKottu.isSalty();
console.log(familyKottu);

//adding new field to the object created by a constructor

familyKottu["tasteGood"]=false;

console.log(familyKottu.tasteGood); 

//Arrays

var myArray= [1,2,3, "adhas","Strign",true,familyKottu];

console.log(myArray);
console.log(myArray[4]);
console.log(myArray[3].length);// get array length

//Create an array using array Object

var nameArray= new Array();

nameArray[0]="Buhuti";
nameArray[1]="Manakal";
nameArray[2]="Sirimewan";
nameArray[3]="Silva";

console.log(nameArray);
nameArray.push('Bob');
console.log(nameArray);
nameArray.pop('Bob');

var namesArray2= ["Chris","Randy","Mana",["Sir","Jhon","Kothalawala"]];

console.log(namesArray2[3][2]);

//sorting an array
console.log(namesArray2.sort());

//contanation of array

var arr1=["Suranga","Buranga","Murunga"];
var arr2=["Sugath","Surath","Sudath"];

var shityArr=["Rick","Morty","Mr Pickles","Suraweera"];

var newarr= arr1.concat(arr2,shityArr);
console.log(newarr);

//Slicing an array (Create a sub array slicing a part of the array)

var shityArr=["Rick","Morty","Mr Pickles","Suraweera","Duriyan","PalaMalla","Hora","Mara"];

//we can slice adding the point to start and ending point ex:- slice.(start,end)

var newshit=shityArr.slice(3,6);
console.log(shityArr);
console.log(newshit);

var foods=["kiribath","roti","Pittu","Kottu","Fried Rice","Noodles"];

var favouritefood=foods.slice(foods.length-1);//slice array from the last item of foods array
console.log("My favourite food is "+favouritefood);


// join elements in an array
// add , to shittyArr

shityArr.join(",");
console.log(shityArr);

//Creating object arrays

var kottuTypes= [myKottu,familyKottu];
console.log(kottuTypes);
