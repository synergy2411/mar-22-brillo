// Literal Method

// var myBooks = ["book1", "book2", "book3"]

// var box = {
//     width : 8,
//     heigth : 6,
//     books : myBooks,
//     label : "My Stuff",
//     isOpen : false,
//     addBook : function(book){
//         box.books.push(book);
//     }
// }

// box.addBook("book4");

// console.log(box.books.length);      // 4
// console.log(myBooks.length);   // 3



// var userOne = {                         // xxx9sjs87sdn
//     name : "John Doe"
// }

// var userTwo = userOne;

// userTwo.name = "Jenny Doe";

// console.log(userOne);           // ?



// var valueOne = 101;
// var valueTwo = valueOne;
// valueTwo = 201;
// console.log(valueOne);              // 101


// var user = {};
// user.firstName = "John";
// user.lastName = "Doe";
// user.age = 32;

// console.log(user);          // {firstName, lastName, age}



// Constructor Method : similar type of objects

// function Person(fname, lname){
//     // var this = {}
//     this.fname = fname;
//     this.lname = lname;
//     this.sayHello = function(){
//         return "Hello " + this.fname + " " + this.lname;
//     }
//     // return this;
// }

// var john = new Person("John", "Doe");
// console.log(john.sayHello());




// Instance Method - to implement inheritance 

var shoe = {
    size : 8,
    construction : 'sneaker'
}

var magicShoe = Object.create(shoe);

console.log(shoe.hasOwnProperty('size'));
console.log(magicShoe.hasOwnProperty('size'));

console.log(shoe.isPrototypeOf(magicShoe));
console.log(magicShoe.isPrototypeOf(shoe));

console.log(Object.prototype.isPrototypeOf(shoe));
console.log(Object.prototype.isPrototypeOf(magicShoe));


// console.log("Magic Shoe Size : ", magicShoe.size);

// magicShoe.size = 12;

// console.log("Shoe Size - ", shoe.size);         // 8

// console.log(magicShoe.size);         // {size : 12}