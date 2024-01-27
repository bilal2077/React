
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}



for (let i = 1; i <= 10 ; i++) {
    const element = [i];
    // console.log( "TABLE  :",i);


    for (let j = 1; j <= 10 ; j++) {
        const element = [j];
        // console.log(`first loop ${i},second loop :${j}`);
        // console.log(i + `  *  ` + j + ` = ` + i*j );
    }
    
}





// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }


let myArray = ["bilal", "usman", "saad"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}




// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         // console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    



// ++++++++++++++++++++ WHILE LOOOOOOOOOOOOOOOOOOOOOOOOOOP ++++++++++++++++++++++++++++
// let index = 10;

// while ( index <= 100) {
    
//     console.log(index);
//      index= index + 10
// }



// let a = 0;
// while (a < arr.length){
      
//       console.log(`velue is ${arr[a]}`);
//        a = a + 1 
// }

// =======================DO WHIEL LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP++++++++++++++++++++


// let  = ["bilal", "usman", "saad"]

// let score =  0;

// do {
//     console.log(myArray[score]);
//       score++
// }while (score <= myArray.length )



//============================= FOR OF LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP+++++++++++++++++++++

let arrry = [1,2,3,4,5,6,]

for (const num of arrry) {
    
    // console.log(num);

}

 let staring = "hello world!"
for (const hello of staring) {
    
    // console.log(hello);
    
}
// ===============OFR IN LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP

let obj  = {
    js: `javaScript`,
    TS: `TypeScript`,
    CPP: "c++"
}

for (const name in obj) {
    // console.log(`${name}  is ${obj[name]} `);
}

let naam = ["bilal","usamn","saad"]

for (const key1 in naam) {
   
        // console.log(key1, " : " ,naam[key1]);
    
}


// ============================ MAP .JS ================+++

 const map = new Map();
 map.set (`PK,`,"pakistan")
 map.set (`IN,`,"india")
 map.set (`US,`,"unaited state of Amarica")

//  console.log(map);

for (const [world, velue] of map) { //for of loop
    // console.log(world,"  :", velue);
}
 


//=-====================FOR eacH loooooooooooooooooooooooooooooooop========================================

let months = [" ","jun","fab","mar","aip","may","jun"]


months.forEach((vulu,index)  =>  {
    // console.log(vulu,index);
    
});




let ao = [
    { langugeaname:"javaScrip",
      filename: "js" },

    { langugeaname:"namejava",
      filename: "java" },

    { langugeaname:"python",
      filename: "py" }
]


ao.forEach((val) => {
    console.log(val.langugeaname);
});