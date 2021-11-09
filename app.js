// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random)
// } else {
//     console.log("Your number is greater than or equal to 0.5")
// }

// const dayOfWeek = prompt('Enter a Day');

// if (dayOfWeek === 'Monday') {
//     console.log("Huhh!! Its Monday")
// } else if (dayOfWeek === 'Saturday') {
//     console.log('Yes!!! Its Saturday!')
// } else if (dayOfWeek === 'Friday') {
//     console.log("Fridays are the best")
// } else {
//     console.log("UHMMM!!")
// }

// const age = 7;
// if (age < 5) {
//     console.log("You are a baby. It's free")
// } else if (age < 10) {
//     console.log("You are a child. You pay 60$")
// } else if (age < 65) {
//     console.log(" You are an adult. You pay 20$")
// } else {
//     console.log("You are a senior. You pay 10$")
// }

// const password = prompt("please enter a new password!") //logic: if the password length is long enough it then checks for spaces
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {  //this is the logic for not including spaces in password
//         console.log("Valid Password!");
//     } else {
//         console.log("Password cannot contain spaces")
//     }
// } else {
//     console.log("Password too short! Must be 6+ characters")
// }

// const userInput = prompt("Enter Something")

// if (userInput) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }
// if (0) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (null) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (NaN) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (undefined) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (1) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {  // when there is no space indexOf gives -1
//     console.log("Valid Password!")
// } else {
//     console.log("Incorrect format for password!")
// } 

// const age = 0;
// if (age > 0 && age < 5 || age >= 65) {
//     console.log("Free!")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age!")
// }

// const age = 45;
// if (!(age > 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or senior")
// }

// const day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday!");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("I don't know that!");
// }


// LOOPS

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i)
// }

//This is an "infinite loop" , do not run it for your system's safety
// for (let i = 20; i>=0; i++) {
//     console.log(i)
// }

// Nested Arrays

// for (let i = 0; i <= 10; i++) {
//     console.log(`i is ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

// A more practical nested arrays example

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanito', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`#ROW ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// While Loop
// let count = 0;
// while (count < 10) {
//     console.log(count)
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code now!");
// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code please!")
// }
// console.log("Congrats, you got the secret!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me") {
//         break;
//     }
// }
// console.log("Okay, you win!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i)
//     if (i === 100) break;
// }

//let maximum = parseInt(prompt("Enter maximum number!"));
//while (!maximum) {          //while maximum is a falsy value prompt keeps repeating due till a truthy value is inserted
// maximum = parseInt(prompt("Enter maximum number!"));
// }

//const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess!")
//     } else {
//         guess = prompt("Too low! Enter a new guess!")
//     }
// }
// if (guess === 'q') {
//     console.log("OK, QUITTING!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You Got It!! It took you ${attempts} guesses`)
// }

// let go = prompt("Enter it");
// console.log(typeof (go)) // here i discovered that every input is converted to a string

// Guessing game 

// let maximum = parseInt(prompt("input the maximum number please"))
// while (!maximum) {
//     maximum = parseInt(prompt("input a valid maximum number please"))
// }

// let targetNum = Math.floor(Math.random() * maximum) + 1;
// let guess = prompt("Enter your first guess");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {       // this shows that a string can be compared to an integer e.g '3' < 2 is true
//         guess = prompt("Guess is too high! Enter a new guess")
//     } else if (guess < targetNum) {
//         guess = prompt("Guess is too low! Enter a new guess")
//     } else {
//         guess = prompt(`You have entered ${guess}, which is an invalid number,please enter a valid number`)
//     }
// }
// if (guess === 'q') {
//     console.log("Ok, quitting")
// } else {
//     console.log("Congrats you win")
// }
// console.log(`It took you ${attempts} attempts!`)

// using for loop to iterate an array!
// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }

// The regular Nested for loop and the Nested for of loop

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanito', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

// for (let char of "hello world") {
//   console.log(char) 
//  }
// 

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 81,
//     vonnie: 65
// }

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

//getting the average using for of 
// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)
// console.log(total)

// function Vowel() {
//     console.log('Do');
//     console.log('Re');
//     console.log('Mi');
// }

// function greet(firstName) {
//     console.log(`Firstname is ${firstName}`)
// }

// function Names(firstName, lastName) {
//     console.log(`My name is ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result)
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     let sum = x + y;
//     return sum;

// function collectEggs() {
//     let totalEggs = 6;

// }
// collectEggs()
// console.log(totalEggs);// this will fail as the variable was declared within the function scope

// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs); // this will give zero 0 
// collectEggs();
// console.log(totalEggs); // this will give six 6

// let bird = 'Scarlet Macaw';
// function birdwatch() {
//     let bird = 'Great Blue Heron'  //Scarlet Macaw will be printed here because bird variable here is scoped to the function, you will have to console.log it inside that block as in line 370
// }
// birdwatch()
// console.log(bird)

// let bird = 'Scarlet Macaw';
// function birdwatch() {
//     let bird = 'Great Blue Heron'
//     console.log(bird)
// }// this will give Great blue heron 1st and then Scarlet Macaw
// birdwatch();
// console.log(bird);

// Block Scope
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius) // this gives 8 as it is not within the block scope
// console.log(PI) // this gives an error because it is within the block scope

// for (let i = 0; i < 5; i++) {  // var i = 0; i < 5; i++, for this i will still be accessible outside the loop, check block scope lecture (2:40)
//     var msg = 'ABCDEF';
//     console.log(msg)
// }
// console.log(msg)

// function bankRobbery() {
//     const heroes = ['Spiderrat', 'Wolverings', 'Black Pepsi', 'Colossus']
//     function cryForWhat() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`Please dont help us, ${hero.toUpperCase()}`)
//             }
//         }
//         inner();
//     }
//     cryForWhat();
// }
// // bankRobbery();

// Function Expressions

// function add(x, y) {
//     return x + y;
// }

// const add = function (x, y) { // Storing a function in a variable
//     return x + y;
// }

// Higher Order Function
// passing in a function as an argument

// function callTwice(func) {   // this function can take in a function as an argument and execute it two times
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1 // this function can be passed in into the calltwice and the calltentimes function
//     console.log(roll)
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {   // this function can take in a function as an argument and execute it ten times
//         f()
//     }
// }


// Returning Functions

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION")
//             console.log("CONGRATS, YES YOU KNOW")
//         }
//     } else {
//         return function () {
//             alert('OH NOOOOOOO!')
//             alert('You Made A Grave Mistake')
//             alert('You Made A Grave Mistake')
//             alert('You Made A Grave Mistake')
//         }
//     }
// }

// const flow = makeMysteryFunc()  // the function must be assigned to a variable to run
// flow();

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetweenNum(min, max) {
//     return function (num) {
//         return (num >= min && num <= max)
//     }
// }

// const isChild = isBetweenNum(0, 18)
// const isAdult = isBetweenNum(19, 65)
// const isSenior = isBetweenNum(66, 100)

// isChild(13);

// Defining Methods
// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// myMath.cube(3); // 27
// myMath.square(3); // 9

// // new javascript syntax for object methods (for this syntax the excludes : function keyword)
// const myMaths = {
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// this keyword in javascript 

// const cat = {
//     name: 'Blue Steele',
//     color: 'Grey',
//     breed: 'Scottish Fold',
//     meow() {
//         console.log(`${this.name} says MEOW!`)
//     }
// }

// const meow2 = cat.meow;  // when one executes meow2() we get "says MEOW!"...in this case the his keyword acts like window is on its left
// when one executes cat.meow() we get "Blue Steele says MEOW!"

// Try/Catch
// try {
//     hello.toUpperCase()
// } catch {
//     console.log("ERROR!!") // Since the error has been caught the following line of code will run, if we didnt use the try/catch the next line of code wouldnt run
// }
// console.log("After")

//Callbacks and Array Methods

// Foreach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function print(element) {
//     console.log(element)
// }
// numbers.forEach(print); // Note that the function as whole is mostly passed in not just the name

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// movies.forEach(function (movie) {
//     console.log(`The title is ${movie.title}/Rating-${movie.score}`) // just some practice
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99, 
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbre = numbers.map(function (num) {
//     return num * 2;
// })

// const titles = movies.map(function (film) {  // map creates a new array by picking one by one
//     return film.title;
// })

// Arrow Function 

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {  
//     return x * x;
// }

// const square = x => {  // the argument can also be passed in without parenthesis if it's just an argument
//     //     return x * x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// Arrow Function Implicit Returns

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1  // implicit returns work when there is only a single statement to return
// )

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))
// console.log("Hello!!!")
// setTimeout(() => {
//     console.log("Are you still there?")   // this shows after 3 seconds
// }, 3000)
// console.log("Goodbye")

//Set Interval
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.filter(n => {
//     return n === 4   // 4 only will be in an array
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1960
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1976
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 1943
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1989
//     },
//     {
//         title: 'Gold',
//         score: 58,
//         year: 2008
//     },
//     {
//         title: 'ChenChen',
//         score: 65,
//         year: 2000
//     }
// ]

// const goodMovies = movies.filter(film => {
//     return film.score > 80
// })

// // a shortened syntax
// const HighRatedMovies = movies.filter(m => m.score > 80)

// const badMovies = movies.filter(flm => flm.score < 70)

// const recentMovies = movies.filter(mov => mov.year > 1990)

// const goodTitles = movies.map(m => m.title)

// movies.filter(m => m.score > 80).map(m => m.title) // they can be chained together like this  

// Some and every

// const exams = [80, 98, 93, 78, 77, 90, 89, 84, 81, 81, 77]
// exams.every(score => score >= 75) // as long as all the numbers is greater than 75, it will be true

// exams.some(score => score >= 75) // as long as at least one of the numbers is higher than 75

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1960
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1976
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 1943
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1989
//     },
//     {
//         title: 'Gold',
//         score: 58,
//         year: 2008
//     },
//     {
//         title: 'ChenChen',
//         score: 65,
//         year: 2000
//     }
// ]

// movies.some(movie => movie.year > 2015)

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0;
// for (price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// const total = prices.reduce((total, price) => total + price)

// // Note: Reduce can also be used to get the minimum or maximum number in an array
// const minPrice = prices.reduce((min, price) => {
//     if (min < price) {
//         return min
//     } 
//     return price
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1960
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1976
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 1943
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1989
//     },
//     {
//         title: 'Gold',
//         score: 58,
//         year: 2008
//     },
//     {
//         title: 'ChenChen',
//         score: 65,
//         year: 2000
//     }
// ]

// const highestRated = movies.reduce((bestMovie, currentMovie) => { // this returns the highest rated movie
//     if (bestMovie.score > currentMovie.score) {
//         return bestMovie
//     }
//     return currentMovie
// })

// const evens = [2, 4, 6, 8, 10];
// const sumUp = evens.reduce((sum, number) => sum + number) // 30  // sometimes the initial value paramater is used .reduce(callback, Initial value). check line 772

// const sumUpinit = evens.reduce((sum, number) => sum + number, 100) // 130

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`  // person.fullName() will give Viggo Mortensen butif it was an arrow function it will not give us Viggo Mortensen
//     }
// }

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}` // in this arrow function, this keyword will just refer to the scope it was created in, i.e. windows will be the object
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.lastName)
//         }, 3000)
//     }
// }


// this refers to the object that is executing the current function
//Rules for easy understanding of the this keyword
// if the method is a regular function(e.g function () {}) in an object, 'this' keyword refers to the object. see line 777
// if the function is not a method, 'this' keyword will refer to the global( window,global )object. a nested regular fuction falls into dis category alot of times

//examples

//Default Params

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1  //
// }

// the new syntax i.e. the default param syntax

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(person, msg = "Hey there") {
//     console.log(`${msg}, ${person}!`)
// }

//Spread

// Note when usin it for an array, its as if one wants to remove the bracket
// Math.min(1,76,44)
// 1
// const num = [12,34,5,6,7,8,9,90]

// Math.max(num) //NaN

// Math.max(...num)
// 90

// Spread with array literals

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs]  // ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']
// const somePets = [...dogs] // ['Rusty', 'Wyatt']

// spread with object

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' };

// // {...feline, color: 'black' } // {legs: 4, family: 'Felidae', color: 'black'}

// const dataFromForm = {
//     email: 'blue@gmail.com',
//     password: 'ejke38ei',
//     username: 'tfunke'
// } // copying properties into an object using spread
// const newUser = { ...dataFromForm, id: 2345, isAdmin: false } // {email: 'blue@gmail.com', password: 'ejke38ei', username: 'tfunke', id: 2345, isAdmin: false}

// Rest Params
// in every function that we create, there is always an argument object in there
// function bottle() {
//     console.log(arguments[0]) // argument object is an array that but does not accept array methods like pop,push etc.. but it holds all the argument passed in like an array
// }
// bottle('Fahm')// Fahm is printed because it is the only content in the argument object, hence index of Zero(0)

// function sum() {
//     return arguments.reduce((total, el) => total + el) // this will not work bcos argument object does not accept array method
// }

// function sum(nums) {

// }
// sum(3, 5) // in this case 3 is the only valid parameter, look below to see how rest solves this problem

// function sum(nums) {
//     console.log(nums)
//      }
//      sum(3, 5)
//      //result 3


//     function sum(...nums) {
//     console.log(nums)
//      }
//      sum(3, 5)
// result [3, 5]

// function raceResults(gold, silver, ...everyoneElse) { // ...everyoneElse refers to the reamining parameter irrespective of how plenty it is 
//     console.log(`GOLD MEDAL GOES TO: ${gold}`)
//     console.log(`SILVER MEDAL GOES TO: ${silver}`)
//     console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
// }

// Destructuring Arrays
// const scores =  [11222, 22334, 34455, 45445, 65775, 45654, 67467, 87349];

// const [gold, silver, bronze, ...everyoneElse] = scores;

//gold > 11222, silver > 22334, bronze > 34455
// everyoneElse = [45445, 65775, 45654, 67467, 87349] the rest operator as used here
 
//Destructuring Objects
// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
//     city: 'San Francisco',
//     state: 'California'
// }
// const { email, firstName, lastName, city, bio } = user;
// // email > 'harvey@gmail.com' firstName > 'Harvey'
// const { born: birthYear, died: deathYear } = user; // this is used to change the born variable to birthYear
// // birthYear > 1930, deathYear > 1978

// const user2 = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// const { city, state, died = 'N/A'} = user2; // one can also add to it, i.e. died = 'N/A'

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }
 
 // destructuring the paramaters, those parameters are inside the object

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter(movie => movie.score >= 90)
// movies.filter(({score}) => score >= 90)

// Result

// {
//     "title": "Amadeus",
//     "score": 99,
//     "year": 1984
// }
// {
//     "title": "Parasite",
//     "score": 95,
//     "year": 2019
// }
// {
//     "title": "Alien",
//     "score": 90,
//     "year": 1979
// }

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

// the destructured parameter way

movies.map(({title, year, score}) => `${title} (${year}) is rated ${score}`)