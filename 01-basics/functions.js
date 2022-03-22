// Function Syntax
// function add(n1,n2){
//     return n1 + n2;
// }

// console.log("Add : ", add(4,3))

// Function Expression

// var addition = function(n1, n2){
//     return n1 + n2
// }

// console.log(addition.toString());          // ?

// Functions can be returned from another function
// Closures : process of binding the outer scope variable to the inner function
// function mystery(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFn = mystery();

// console.log(nestedFn());        // 5
// console.log(nestedFn());        // 6

// var nestedFnTwo = mystery();
// console.log(nestedFnTwo());         // 5

// console.log(mystery());             // ?

// function buildTicket(transport){
//     var numOfPassenger = 0;
//     return function(passengerName){
//         return "Hello Mr. " + passengerName + "\nYou are going via " + transport +
//             "\nYour Ticket ID :"+ (++numOfPassenger) 
//     }
// }

// var ship = buildTicket("Ship");
// console.log(ship("John Doe"));          // ?
// console.log(ship("Jenny Doe"));          // ?
// var car = buildTicket("Car");
// console.log(car("James Doe"));          // ?
// console.log(ship("Alice Doe"));          // 





// Functions can be sent as parameter to another function;
// - Called as "Callbacks"
// - Error First, Callback Last

// function greet(){
//     console.log("Good Morning!");
// }

// function sayHello(cb){
//     console.log("Inside sayhello");
//     cb();
// }

// sayHello(greet)



function sayHello(arr, cb){
    setTimeout(function(){
        if(arr.length > 2){
            // Make remote Server
            cb(null, "Good Morning");
        }else{
            cb(new Error("Too low values"))
        }
    }, 3000)
}

console.log("Start")
sayHello([2,3,4,5], function(err, message){
    if(err){
        return console.log(err);
    }
    console.log(message)
})
console.log("End");

// Start -> wait 3 seconds -> Good Morning -> End
// Start -> End -> Wait... -> Good Morning



// console.log("Start")        
// setTimeout(function(){
//     console.log("Timer")
// }, 0)
// Promise.resolve("some message").then(function(){
//     console.log("Promise")
// })
// console.log("End")


// Function Hoisting

// function mystery(){
//     function chooseNumber(){
//         return 7;
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 12;
//     }
// }

// var nestedFn = mystery()
// console.log(nestedFn());            // 12



// function mystery(){
//     if(user.isAuthenticated()){
//         var chooseNumber = function (){
//             return 7;
//         }
//     }else{
//         chooseNumber = null;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFn = mystery()
// console.log(nestedFn());      // 7



function mystery(){
        var chooseNumber = function (){
            return 7;
        }
    return chooseNumber;
    var chooseNumber = function (){
        return 12;
    }
}

var nestedFn = mystery()
console.log(nestedFn());      // 7