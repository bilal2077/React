//  function sayMyName (){
//     console.log("B");
//     console.log("I");
//     console.log("l");
//     console.log("A");
//     console.log("l");
//  }

//  sayMyName() 


// function AddTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


// function AddTwoNumbers(number1, number2){  
//     let Result = number1 + number2
//     return Result
// }



// function AddTwoNumbers(number1, number2){  
   //  return  number1 + number2
// }


// let Result = AddTwoNumbers(1,3)

// console.log("Result :", Result);





function logiinUserMassage (username){
   if (username === undefined) {
      console.log("Pleas Enter your Nmae");
      return
   }
  return  `${username} just logged in`

}


// let log = logiinUserMassage()

// console.log(log)



// function price(h1, i2, ...num1){
//    return num1
// }

// console.log(price(200,100,300));




let user ={
   name:"usman",
   price: 199
}

function nameandprice(anyobject) {
   return `Hello ${anyobject.name} Your price is ${anyobject.price}`
   
}

nameandprice(user)
