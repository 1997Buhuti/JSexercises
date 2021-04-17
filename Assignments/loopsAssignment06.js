/*
Author:D.P.B Manakal
Date Created:04/07/2021
*/

//Fizz Buzz

for(let i=0;i<=100;i++){

    if(i%3===0 && i%5===0){
        console.log('FizzBuzz')
        continue
    }
    if(i%3===0){
        console.log('Fizz')
    }
    else if(i%5===0){
        console.log('Buzz')
    }
    else if(i%i===0 && i%1===0){
        console.log('prime')
    }
    else{
        console.log(i)
    }

}