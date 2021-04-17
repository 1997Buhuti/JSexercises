/*
Author: D.P.B Manakal
DateCreated:13/04/2021
*/
// Assignment 1

const mortals=['Putin','Socrates','Aristotal'];

//This function checks whether the given name is a valid name and return true if it is 
const isMortal=(name)=>{
  const type=(typeof name)
  if(type==='string'){
    return true
  }
  return false
}

// the name we want pass to the function
let name='Aristotal'

//if the name is a valid person's name then it's a mortal else not
if(isMortal(name)){
  console.log(name+' is a mortal')
}
else{
  console.log(name+' is not a mortal')
}


//Assignment 2

const cakeTypeChecker=(type)=>{
  if(type==='vanila'||type==='Vanila'){
    console.log('It\'s a vanila cake')
  }
  else if(type==='chcoclate'||type==='Chcoclate'){
    console.log('It\'s a chcoclate cake')
  }
  else{
    console.log('It\'s a ckae')
  }
  
}

cakeTypeChecker('vanila')