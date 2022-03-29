// function greet(err, data){
//     if(err){
//         return console.log(err)
//     }
//     console.log("Hello there", data)
// }

// function demo(arr, cb){
//     if(arr.length > 2){
//         cb(null, {message : "Greater than 2"})
//     }else{
//         cb(new Error("too less value"))
//     }
// }

// demo([1,2],greet)

// demo([1,2,3,4],function(err, data){
//     if(err){
//         return console.log(err)
//     }
//     console.log("inline callback ", data)
// })

// demo - HOF
// greet - Callback

// async function search(searchTerm, cb) {
//   const uri = `https://api.github.com/users/${searchTerm}/repos`;
//   fetch(uri)
//     .then((response) => response.json())
//     .then((result) => cb(null, result))
//     .catch((err) => cb(err));
// }

// search("mojombo", function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("RESPONSE -> ", data);
// });


// function demoPromise(){
//     const promise = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve({message : "Promise resolved"})
//             // reject(new Error("Something went wrong"))
//         }, 3000);
//     });
//     return promise;
// }

// Promise hell
// function consumePromise(){
//     demoPromise()
//         .then(result => {
//             demoPromise2(result)
//                 .then(response => console.log(response))
//                 .catch(console.log)
//         })
//         .catch(console.log)
// }

// consumePromise()

// async function consumerPromise2(){
//     try{
//        const result =  await demoPromise()
//        const response = await demoPromise2(result)
//        console.log("RESULT ---> ", response);
//     }catch(err){
//         console.log("ERROR ---> ", err)
//     }
// }

// consumerPromise2()



let user = {
    firstName : "John",
    lastName : "Doe",
    age : 32,
    isAdmin : true
}


// let map = new Map();
// map.set("email", "test@test.com")
// map.set(user, "My Friend");
// map.set(123, "My Lucky Number")

// for(let val of map.values()){
//     console.log(val)
// }
// for(let key of map.keys()){
//     console.log(key)
// }

// map.clear()

// console.log("is 123 key ? ", map.has(123))

// for(let key of map.keys()){
//     console.log(key)
// }


// let set = new Set();

// set.add(123)
// set.add(456)
// set.add(789)
// set.add(123)

// for(let key of set.keys()){
//     console.log(key)
// }


// let author = {
//     name : "john",
//     age : 32
// }

// // let authorTwo = author;

// // authorTwo.name = "jenny";

// let authorTwo = {               // { name, age } 
//     ...author,
//     email : "test@test.com"
// }

// authorTwo.name = "Jenny";

// console.log(authorTwo);         // { name : "Jenny", age : 32, email : 'test@test.com' }
// console.log(author.name);           // ?

// let arr = ["foo", "bar"]

// let newArr = [...arr, "bam", "baz"]

// console.log(newArr);



// function userDetail( username, age,...details){
//     console.log(details);
// }

// userDetail("synergy2411", 34, true, "sumitkh", false)





// var x = 301;

// function c(){
//     console.log(x);         // 301
// }

// function a(){
//     var x = 101;
//     function b(){
//         // var x = 202;
//         console.log(x);         // ?
//     }
//     b()
//     c()
// }

// a();




// function testClosure(){
//     var x = 101;
//     function chooseNumber(){
//         return ++x;
//     }
//     return chooseNumber;
// }

// let nestedFn = testClosure();

// console.log(nestedFn());            //102
// console.log(nestedFn());            //103

// let nestedFnTwo = testClosure();
// console.log(nestedFnTwo());             // 102

// console.log(testClosure());     // ?





// Function Hoisting
test();

function test() {                // test = Function

    function fn(){
        console.log("First Function")
    }

    fn();

    function fn(){
        console.log("Function Called");
    }
}
