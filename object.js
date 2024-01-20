// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}



// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser["full name"]);


// JsUser.email ="bilal@hotmail.com"
// Object.freeze(JsUser)
// JsUser.email ="usman@hotmail.com"
// console.log(JsUser); 


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

