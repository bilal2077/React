// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }



// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser["full name"]);


// JsUser.email ="bilal@hotmail.com"
// Object.freeze(JsUser)
// JsUser.email ="usman@hotmail.com"
// console.log(JsUser); 


// JsUser.greeting = function(){
//     console.log("hello js user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`hello js user,${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());





//======Object Part 2:====


// let tinderUser =new Object()
// let tinderUser ={}


// tinderUser.name = "123abc"
// tinderUser.isloggedIn = false

// console.log(tinderUser);



// let user = {
//     email:"bilal@hotmail.com",
//     fullname:{

//         firstname: "bilal",
//         lestname: "kahn",
//     }
// }

// console.log(user.email);

// let obj1 = {1:"a",  2:"b", 3:"c"}
// let obj2 = {4:"d",  5:"e", 6:"f"}
// let obj3 = {7:"g",  8:"h", 9:"I"}


// console.log(Object.assign({},obj1,obj2,obj3));


// const obj = {...obj1,...obj2}

// console.log(obj);





// let obj33 = {
//     name:"usman",
//     age:19,
//     logdin:false,
// }

// console.log(Object.keys(obj33)); 
// console.log(Object.values(obj33));
// console.log(Object.entries(obj33));


// console.log(obj33.hasOwnproperty('logdin'));

// let course = {
//     coursename: "js",
//     price :"199",
//     courseinstructor:"hitesh"
// }

// // course.courseinstructor

//  let {courseinstructor}= course

//  console.log(courseinstructor);
 


{
    "name": "biall",
    "coursename": "j in hundi",
    "price": "100"
}