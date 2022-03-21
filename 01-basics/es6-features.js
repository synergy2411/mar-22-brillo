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


function display(){
    console.log(arguments);
}

display("email@test.com")
display("email@test.com", 32)
display("email@test.com", 32, true)








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