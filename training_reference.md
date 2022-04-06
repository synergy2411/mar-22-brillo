# Training timings - 09:30AM - 06:30PM
# Breaks
- Tea break -> 11:30AM - 11:45AM (15 Minutes)
- Lunch break -> 01:30 - 02:15 (45 Minutes)
- Tea break -> 04:00 - 04:15 (15 Minutes)



# What is JavaScript?
- Used for validation
- Interactive web apps
- Create Single Page App - does not reload/refresh in browser
- Supported to DB - MongoDB
- Easy to learn
- Reduces Server interaction
- Defines behaviour of web page
- Interpreted as well as compiled
- Frontend (Client-side) as well as backend (Server-side)
- Game development
- Open Source/ need to take pre-caution to make it secure
- Versatile
- Single Threaded
- Asynchronous / Non blocking
- light-weight
- Event-Driven
- Dynamic
- Scripting Language
- Was based on Objects only



MEAN / MERN -> Full Stack 
MongoDB : JSON -> JavaScript Object Notation
Express : JavaScript Web App Framework
Angular/React : Client-side JS Library / Framework
Node : Platform -> JS - 25-30MB


# Async Tasks
- Timer API -> setTimeout, setImmediate, setInterval
- Read/Writing to/from file
- Obtaining the socket
- DB Connection
- Remote Server Call (XHR Call)
- Complex Calculation [1500] * [1500] -> 3-4S


# JavaScript Environments
- Browser Environment : Client-side, SpiderMonkey -> Opera & Safari, Chakra-> MS Edge, V8 engine -> Chrome
- Node Environment : Server-side -> V8 Engine


# Web Technologies
- HTML : presenting data
- CSS : change the appearence
- JavaScript : behaviour


# JavaScript Objects
- Unordered collection 
- denoted by { }
- consists of Property Key and value pair (key : value)
- Two properties are separated by Comma (,)
- Literal, Constructor, Instance


# Array -> collection of homogenous elements, based on index, ordered one.

# Datatypes in JavaScript
> Primitive Types : Number, String, Boolean
> Reference Types : Functions, Objects, Arrays, Date


# Functions in JavaScript
- first class citizens in JavaScript
- Syntax as well as Value

# Closures : process of binding the outer scope variable to the inner function


# JavaScript Engine Execution 

- Synchronous Tasks
- Asynchronous Tasks
    : Micro Tasks -> Promises and queueMicrotask()
    : Macro Tasks


# JavaScript Engine runs in two phases
- Creational Phase => allocates the memory
- Executional Phase => performs all assignements and executions

# ES6 / ES2015 - ECMA Community specifications
- arrow functions
- destructuring
- classes
- extends
- implments
- rest and spread operators
- template literals
- block scoping
- map / set
- promises


# Module System
- CommonJS > NodeJS App
- ES6 Module > Browsers
- AMD Module > Additional configuration


# Handling JavaScript Async behaviour-
- Callbacks
- Promise
- Observable API


# Node installer comes with -
-> Node Runtime Environment (V8 Engine execute JavaScript Code) > node fileName.js
-> Node Package Manager (npm) -> dependecy manager for NodeJS projects
-> Node Core Modules

# nodemon : restart the server automatically, whenever the file is saved
> npm install nodemon -g
> nodemon core-module.js




# What is NodeJS?
- Platform
- Fast
- Single Threaded
- Scalable 
- Open Source
- Asynchronous
- Event-driven
- Real-time App
- Data Intensive task
- Dynamic Web Apps

# Modules
- Core -> e.g file system, http, path, os etc
- File -> maths.js, fortune.js
- External -> colors, yargs etc


# package.json -> meta info about the project
> npm init [-y]
> npm i yargs colors

# Notes App
> node index.js add --title="New Title" --body="New Title Body"
> node index.js read --title="Some Title"
> node index.js remove --title="Some Title"
> node index.js list


# NPM Commands (Commonly used) -
- npm init [-y]
- npm install [packageName] [-g]
- npm outdated
- npm update
- npm config get/set 
- npm config get registry
- npm adduser
- npm publish
- npm ls --depth 0 [-g]


# Semantic Versioning -> X.Y.Z (semver.org)
- X : Major Version : add new features ; NOT compatible with existing code
- Y : Minor Version : add new features ; compatible with existing code
- Z : Patch Version : bug fixes, patch in app

Colors -> 1.4.0 -> 1.4.1
Colors -> 1.4.0 -> 1.5.0
Colors -> 1.4.0 -> 2.0.0

# Events are PubSub pattern
- emit()
- on()

# Stream -> Communication channel on which data transfer happened in the form of buffer (chunk / bytes)
- Readable
- Writable
- Transform
- Duplex


# Express
> npm init -y
> npm install express@4.17.3
> npm install nodemon -g
> nodemon index.js

# MongoDB

/playground/04-express-basics> 

/training>cd 04-express-basics

/training/04-express-basics> npm init -y
/training/04-express-basics> npm i express
/training/04-express-basics> dir
/training/04-express-basics> nodemon index.js


# REST (REpresentational State Transfer) Endpoints
- GET : fetch the data
    /api/todos -> fetching all todo items
    // GET -> http://localhost:9001/api/todos
    // GET -> http://localhost:9001/api/todos/{todoId}
- POST : create the data
    /api/todos -> create the new todo item
    // POST -> http://localhost:9001/api/todos + Request Body
- PATCH / PUT : updating the data
    // UPDATE -> http://localhost:9001/api/todos/{todoId} + Request Body
- DELETE : delete the data
// DELETE -> http://localhost:9001/api/todos/{todoId}


# Express
- Sending text content
- Sending JSON content
- Sending HTML File

- REST Endpoints
> GET
> POST
> PATCH
> DELETE

- Access the Route Parameter
- Access the QueryString
- Access the Request Body


# What is MongoDB?
- NoSQL Database
- Can store huge amount of data
- stores data in JSON format


- mongod
- mongo
- use brillio-db
- CREATE
- FIND
- UPDATE
- DELETE


# Node App with MongoDB
-> npm i mongodb

# Mongoose Library -> ORM / ODM
- Schema based solution
- Validation
- Business logic hooks
 : pre & post -> save, validate, init, remove



One to One Relationship
-> One Book can be written by One Author
-> One medical summary belongs to One Patient only

One to Many
-> One trainer can train Many students
-> One City can have Many Citizens

Many to One
-> Many students can enroll in One Course


Many to Many
-> Many Customers can buy Many Products


Book (1) -> Author (1)

Author(1) -> Books(Many)




- If the author gets deleted, all the books written by this deleted author should also be deleted




# Topics to Revise
- Async Calls - Promises, Async...Await
- Set and Map
- Events : Socket API
- Spread / Rest
- Closures & Callbacks
- Function Hoisting
- 

# JS App runs on Single Thread only.
- For all complex calculations/operations, which require time

# Asynchronous : different thread
- Higher Order Function - function that accepts another function as an argument is called HOF - 
- Callback - vanilla JS - Function sent as argument to another function

- Promise API - ES6
    - Producer - produces the promises
    - Consumer - consumes the promises using :
        : then().catch()
        : Async...await


- Map : data storage; Stores data in key-value format; key can be of any type; are iterable.
- Set : data storage; unique data; all API similar to Map; iterable;


- Spread (...) : splits the collection into individual items;
- Rest (...) : creates the collection from individual items; in function arguments; last argument;

- Closure : process of binding outer scope variables with inner functions
- Lexical Scoping and Scope chaining


- JavaScript Engine runs in Two Phases
: Creational Phase -> Memory is allocated
: Executional Phase -> Program gets executed; Assignments (=)

- Function Hoisting -> Functions takes place in memory at creational phase, hence they can be called from anywhere within scope.


> npm i express mongoose jsonwebtoken



# Middleware understanding
- Simple Function
- Will receive request, response and next() as parameter
- Calling next(), will transfer the control to the next middleware
- Middlewares execute in the order, they register with app
- If any middleware send back the respsonse, following middleware will not execute
- Can attach one or more middleare ith one route
- Two Types of middleware
: applicable for complete Application -> app.use(middlewareName)
: applicable for one Route only -> app.get("/route", middleware1, middleware2 ....)


# Load Environment Variables
> npm i dotenv
> require("dotenv").config()
> process.env


# 60 Minutes Challenge (04:00-5:00)

# Step 0
- Create the User Model with username, email, password, age

# Step 01
- Create register Route -> 
    > POST -> http://localhost:9090/users/register 
        - username, password, email, age
        - Stored in MongoDB

# Step 02
- Authenticate the User when user login (email, password)
    -> if user is authenticated, then assign the token


09:30 - 11:30 (Session)
11:30 - 11:45 (break)
11:45 - 1:00 (Session)
01:00 - 2:00 (Meeting / lunch)
02:00 - 3:00 (Session)
03:00 - 5:30 (Meeting / break)
5:30 onwards (weekly assignment / evening standup)


# View / template Engine
- Generate the template / View dynamically
- Reuse the Code e.g using header/footer/side on multiple pages
- Server-Side Rendering
- Syntax supported by Node -
: Jade/Pug -> whitespaces and indentation
: Handlebars
: EJS
: Vash



# Weekend task
- Fetch the Post data from MongoDB
- Populate it in template
- Display the post collections on the UI/View/template


# MVC Pattern
M - Model : Data available in app
V - View : to display the data on User Interface (UI) / browser / View / Template
C - Controller : applying the business logic



# Practice Assignment - Control Flow
Step 01-
> Creating Login Page
Step 02-
> On Login Button Click, you need to verify the user from DB, assign the JWT token to the User
Step 03-
> if User is NOT authenticated, then redirect the user to Login Page
Step 04- 
> if user is authenticated, then redirect the user to Welcome Page after token verification



# What is GraphQL?
- language independent
- specifications
- Single endpoint
: Queries - fetch the data
: Mutations - create / delete / update the data

# Why GraphQL?
- No Under-fetching
- No Over-fetching
- Get the exact data that your app needed
- Relational Data (Authors, Posts, Comments)


authors, books
/authors -> authors record -> _id, name, age, address, experience etc
/books -> books recored -> _id, title, published, total_page, isbn etc
/comments -> comments Record -> _id, text

authorName, authorAge, bookTitle, bookISBN, commentText


# Scalar Types
- String
- Int
- Boolean
- ID


# REST Endpoints
GET - /todos - to get all todos
POST - /todos - create new item
DELETE - /todos/{id} - to delete the item
PATCH - /tods/{id} - to update the item

> npm i express graphql express-graphql


# Task of the day -

- Deleting User
: Posts created by User should be deleted
: Comments created by other users on the Post should also be deleted
: Comments created by same user should be deleted
: User should be deleted

- Implement Update Operation
: updatePost(id : ID!, data : UpdatePostInput)
: updateComment(id : ID!, data : UpdateCommentInput)

- Integrate MongoDB with GraphQL


# Why Passport?
- to Authenticate User by various strategies
- more than 500+ startegies available
- based on session
- connect-style middleware (well integrated with Express App)
- more declarative
- flexiable

- Configuration is bit complex 


# Local Strategy : username and password

# OAuth Strategy -> Open Authentication
-> Google
-> Facebook
-> Twitter 
-> LinkedIn


# Cookie -> 
- Small files
- Maintain the session
- Sent by the server to the client
