// Arrow Functions : clean and short way of writing function

// (arguments) => functionBody

// (arguments) => { 
    // functionBody 1
    // functionBody 2
// }

// var sum = (n1 = 3, n2 = 4) => n1 + n2;

// console.log("Sum : ", sum(5));

// var square = value => value * value; 

// console.log("Square : ", square(4))

// var mul = (n1, n2) => {
//     console.log("Numbers : ", n1, n2);
//     return n1 * n2;
// }

// console.log("Mul : ", mul(3,4))


// Limitations
//  - Can't called with 'new' operator
//  - Don't have 'this' keyword (borrow 'this' keyword from outer scope :: Scope chaining)
//  - Don't have 'arguments' keyword


// function display(){
//     console.log(arguments);
// }

// display("email@test.com")
// display("email@test.com", 32)
// display("email@test.com", 32, true)








// var user = {
//     firstName : "John",
//     lastName : "Doe",
//     getDetails : function(){
//         // return this.firstName + " " + this.lastName
//         // var self = this;
//         // function nestedFn (){
//         //     return self.firstName + " " + self.lastName
//         // }
//         var nestedFn = () => this.firstName + " " + this.lastName;
//         return nestedFn();
//     }
// }

// console.log("User name : ", user.getDetails());










// Lexical Environment and Scope chaining (within function -> outer scope function -> global Environment)

// var x = 301;
// var x;
// function a(){
//     // var x = 101;
//     function b(){
//         // var x = 201;
//         console.log(x)          //  301
//     }
//     b();
// }

// a();


// var x = 201;

// function b(){
//     console.log(x);             // 201
// }

// function a(){
//     var x = 101;
//     b();
// }

// a()













// Destructuring - "unpacking" the collection -> array || object
// - breaks the reference link

// var fruits = ["apple","banana","kiwi", "grapes"];

// var [f1, , f3, f4, f5] = fruits;

// console.log(f3, f5);            // kiwi undefined

// f3 = "oranges";

// fruits[2] = "dragan fruit"

// console.log(fruits);


// var ninja = {
//     name : "King Lui",
//     isBlackBelt : true
// }

// var {isBlackBelt : isBB, name : ninjaName} = ninja;

// console.log(ninjaName + " is having BlackBelt ? " + isBB );


// var user = {
//     firstName : "Alice",
//     lastName :"Doe",
//     age : 32,
//     address : {
//         city : "Bengaluru",
//         street :"201 Main Road, Marathahalli"
//     },
//     friends : ["Jenny", "James"]
// }

// var {
//     firstName : fn,
//     lastName : ln,
//     age,
//     address : {
//         city : ct,
//         street : st
//     },
//     friends : [f1, f2]
// } = user;


// var users = [
//     {email : "john@test.com", age : 32},
//     {email : "jenny@test.com", age : 33},
//     {email : "james@test.com", age : 34}
// ]

// var [
//     {email : e1, age},
//     {email : e2, age},
//     {email : e3, age}
// ] = users;

// console.log(e2);

// var [f1={email,age},f2={email,age},f3={email,age}] = users;

// console.log(f1)










// Spread and Rest Operator (...)
// Rest - creates the collection; always present in function argument; last parameter in function argument;
// Spread - splits the collection


// REST
// function demo(email, age, ...args){
//     console.log(args[0]);       // ?   
// }

// // demo("test@test.com")
// // demo("test@test.com", 32)
// demo("test@test.com", 32, true)

// SPREAD
// var fruits = ["apple", "banana", "guava"];
// var vegAndFruits = ["Peas", "Tomato", ...fruits];

// console.log(vegAndFruits);          // ["Peas", "Tomoto", ["apple", "banana", "guava"]]

// var userOne = {
//     email : "john@test.com",
//     isAdmin : false
// }

// var userTwo = {
//     ...userOne,              // {email, isAdmin}
//     age : 32,
//     email : "jenny@test.com"
// }

// console.log(userTwo);













// Block Scope Variables - restricts the scope of variables to the nearest block (if, else, for, while -> {})
// - let : for other variables
// - const : for creating constants

// function demo(arr){
//     // var LAOD = undefined;
//     // var FLASH = undefined;
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);         // ?
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// demo([2,3,4,5]);


// const username = "John Doe";

// username = "Jenny Doe";

// const user = {                      // xxx0oi98j87y ---> { name : "John Doe" }
//     name : "John Doe"
// }

// user.name = "Jenny Doe";            // xxx0oi98j87y ---> { name : "Jenny Doe" }

// console.log(user);

// user = {                            // xxx0987yu7yu
//     name : "Alice Doe"
// }



// const fruits = ["apple","guava", "banana"];

// fruits.push("kiwi");

// fruits = []             // ERROR

// console.log(fruits);






// Template Literals -> "" | '' | `` (back tick)
// - Embed variables within strings without (+)
// - Multiline strings without (\n)


// let username = "John Deo";
// let age = 32;
// let helloString = `
// Hello from ${username}!
// I'm ${age} years old.
// `

// console.log(helloString);




// Class
// class Student{
//     constructor(studId, name, age){
//         this.studId = studId;
//         this.age = age;
//         this.name = name;
//     }
//     getDetails(){
//         return `Student ID : ${this.studId}, Name : ${this.name}, Age : ${this.age}`;
//     }
// }

// let john = new Student("S001", "John Doe", 32);
// console.log(john.getDetails())


// const {sum, mul} = require("./maths");
// const fn = require("./fortune");

// console.log("Sum : ", sum(2,7))
// console.log("Mul : ", mul(2,7))

// const {message, luckyNumber} = fn()

// console.log("Today's Fortune : ", message)
// console.log("Today's lucku number : ", luckyNumber)













// Map : stores key-value pair; Iterator

// const map = new Map();

// let user = { name : "jenny"}

// map.set("name", "John Doe");
// map.set(true, "isAdmin");
// map.set(123, "address");
// map.set(user, "Friend")

// for(let key of map.keys()){
//     console.log(`KEY METHOD : ${key} : ${map.get(key)}`)
// }
// for(let values of map.values()){
//     console.log(values)
// }

// for(let [key,value] of map.entries()){
//     console.log(`${key} : ${value}`)
// }


// let user = {
//     "name" : "john",
//     123 : true,
//     false : isAdmin,
//     {} : "username"
// }



// Set : stores the unique values
// let set = new Set();

// set.add("John")
// set.add("Jenny")
// set.add("James")
// set.add("Alice")
// set.add("Alice")

// console.log("Set Size : ", set.size);










// Promise : to handle async data
// - handshake between the producer code and the consumer code
// - States -> Pending -> Resolved / SUCCESS -> Rejected / FAILURE
// - Results -> undefined -> Response -> Error
// - Consume the Promise -> .then(response).catch(errpr) | Async...await

// const producer = (ms) => {
//     const promise = new Promise((resolve, reject)=>{
//         if(ms < 3000){
//             setTimeout(()=>{
//                 resolve({message : "SUCCESS"})
//             }, ms);
//         }else{
//             reject(new Error("Waiting too long..."))
//         }
//     });
//     return promise;
// }

// console.log("PROGRAM START")
// const consumer = async () => {
//     try{
//         console.log("Start")
//         const response = await producer(2000);
//         console.log("RESOLVED : ", response)
//         console.log("End");
//     }catch(err){
//         console.log("ERROR -> ", err)
//     }
// }
// console.log("PROGRAM END")
// // const consumer = () => {
// //     producer(4000)
// //         .then((response) => {
// //             console.log(response)
// //         })
// //         .catch((error) => {console.log(error)})
// // }

// consumer();



// Promise.resolve("Data").then(result=>console.log(result))
// Promise.reject(new Error('Something went wrong')).catch(err => console.log(err))