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
