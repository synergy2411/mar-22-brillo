// var x = "John Doe";
// console.log(typeof x);          // string

// x = 101;
// console.log(typeof x);          // number

// x = true;
// console.log(typeof x);          // boolean


let users = [
    { email : "james@test.com", age : 32},
    { email : "jenny@test.com", age : 34},
    { email : "alice@test.com", age : 33},
]

users.sort((a,b) => {
    console.log("________________")
    console.log("A -> ", a)
    console.log("B -> ", b)
    console.log("________________")
    
    return b.age - a.age
})
console.log("--------------------")
console.log(users);