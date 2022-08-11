// alert("Warning! This message will self-destruct in");
// alert("3...");
// alert("2...");
// alert("1...");
// document.querySelector("h1").textContent = "🔥BOOM!🔥";
// console.log("Message destroyed!");
// console.log("Begin program.");
// alert("I am Programming")
// var message = "Hello!";
//
// message="Hello from JavaScript";
// console.log(message);
//  var score =0;
// score += 10;
// var bonusPts = 100;
// var finalScore= bonusPts+score;
//
// console.log(finalScore);
// let score = 5;
// score += 10;
// console.log(score);
// const htmlSnippet = `<h1 class="headline">My Headline</h1>`;
// const message =`I\`m a programmer!`;
// const lines = "Hello, I am Mohamed.\
//  I live in NC, Charlotte.\
//  my daughter is Nour."
// console.log(lines);
// const passphrase =`Open Sesame`;
//
// console.log(passphrase.toUpperCase());
// console.log(passphrase);
// const name=prompt("what is your name")
// let message = "hello, ";
// message += "I am Mohamed. ";
// message += "I live in NC, Charlotte. ";
// message += "my daughter is Nour. "
//
// console.log(message);
// let firstName= "Mohamed";
// let lastName= "Nasr";
// let role = 'developer';
// let msg =`${firstName} ${lastName}: ${role.toUpperCase()}`
// console.log(msg);
// const name=prompt("what is your name")
// const message = `Hello, ${name}. Welcome to my web page.
// I'm happy to see you.`
//
//
// console.log(message);
// const dayMode = prompt("How is your day ?");
//
// const modeMessage = `<h2>Your mode is: ${dayMode.toUpperCase()}!!</h2>`;
// document.querySelector('main').innerHTML= modeMessage;
//
// const adjective = prompt("Please type an adjective");
// const verb = prompt("Please type a verb");
// const noun = prompt("Please type a noun");
// const game = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}</p>`;
//    document.querySelector(`main`).innerHTML = game;

//=======================================================================================
/*
const answer = prompt(`which planet is closer to the sun?`)

if (answer.toUpperCase() === `MERCURY`){
    console.log("That is correct")
}else {
    console.log("Sorry, That is  incorrect")

}

 */
//=================================================================
/*let correctGuess = false;
const number = 6;
const guess = prompt(`guess a number between 1 and 10`);

if( number === +guess) {
    correctGuess = true;
}else if (+guess > number){
    console.log(`Try again, The number is lower`)
}else {
    console.log(`Try again, The number is higher`)
}





    if (correctGuess){

    console.log(`Bravo, correct guess`)
}

 */
//==============================================================================================

//if function
/*
const Java =prompt("What is the programming lang used in backend development");
const Css = prompt("What is the programming lang used to style the web page");
const Ronaldo = prompt("Who is the best player in the world");
let x = prompt("What is the sum of 5 + 5");

const Caml =prompt("What is the ship of the desert");
let score=0 ;
let rank;
if (Java.toUpperCase() ===`JAVA`){score +=1}
if (Css.toUpperCase() === `CSS`){score+=1}
if (Ronaldo.toUpperCase()===`RONALDO`){score+=1}
if (Caml.toUpperCase()=== `CAML`){score+=1}
if (x === `10`){score+=1}

if (score ===5){
    rank = `Gold`
}else if ( score>= 3){
    rank= `Silver`
}else if (score >= 1){
    rank = 'Bronze'
}else {rank="No rank"}
const message =`<h1>You got ${score} out of 5 questions correct</h1>
<h2>Crown earned: ${rank}</h2>`;
document.querySelector(`main`).innerHTML = message;


 */
//============================================================================================================
//Math Function
/*

// const roll = Math.floor(Math.random()*6) +1;
// console.log(`You rolled a ${roll}.`)
 const userNu =prompt(`please enter a number`);

 if(+userNu){
     const roll =Math.floor((Math.random()* +userNu)+1);

     console.log(`The number between 1 and ${userNu} is ${roll}.`);

 }else {
     console.log(`You need to provide a number, Try again`)
 }

 */

//==================================================================================

// String to int
/*
const user1Nu =prompt(`please enter a small number`);
const user2Nu =prompt(`please enter a higher number`);
if(+user1Nu && +user2Nu){
    const roll =Math.floor((Math.random()* (+user2Nu - +user1Nu+1)) + +user1Nu);

    console.log(`The random number between ${user1Nu} and ${user2Nu} is ${roll}.`);

}else {
    console.log(`You need to provide a number, Try again`);
    }


 */
//----------------------------------------------------------------------------

//JavaScript Function
/*
function alertRandom(){
    const randomNumber =Math.floor(Math.random()*6 + 1);
    alert(randomNumber);

}
alertRandom();
alertRandom();
alertRandom();


 */
//----------------------------------------------------
/*
function getRandom() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    return(randomNumber);
}
alert(getRandom());


 */
//----------------------------------------------------------
/*
function isFieldEmpty(){
const field = document.querySelector(`#info`);
if (field.value===''){  // ==(!field.value)
    return true;

}else {
    return false
}
}
const fieldTest = isFieldEmpty();
if (fieldTest === true){  // == (fieldTest)
    alert(`please enter your info`);
}

 */
//----------------------------
/*
function alertRandom(upper){
    const randomNumber = Math.floor(Math.random() * upper + 1);
    return randomNumber;

}
console.log( alertRandom(6));
console.log( alertRandom(100));
console.log( alertRandom(1000));

 */
//---------------------------------
// Multiple agreements
/*
function getArea(length,width,unit){
    const area = length*width;
    return `${area} ${unit}`;

}
getArea(10,20);

 */
//--------------------------------------

  // Arrow Functions
/*
const getRandomNumber = (upper) => {
    const randomNumber =Math.floor(Math.random() * upper) +1;
    return randomNumber;
};

const getArea = (length,width,unit) =>{
    const area = length*width;
    return `${area} ${unit}`;

};
let square = x =>  x * x ;
const add = (x , y) => x*y ;

const name = prompt(`Please enter your name`);
const greeting = () => alert(`Greetings, ${name}!`);
greeting();


function greeting2() {alert(`Greetings, ${name}!`);
return greeting()
}
greeting2();

 */
/*
function sayGreeting(greeting = 'Good Morning',name = 'student'){
    return`${greeting} ${name}`;

}
const getArea = (length,width,unit='sq ft') => {
    const area = length * width;
    return `${area} ${unit}`;
}

 */

 //
 // /**
 // * Calculates and returns the area of a rectangle.
 // *
 // * @param {number} width - The width of the rectangle.
 // * @param {number} length - The length of the rectangle.
 // * @param {string} unit - The unit of measurement.
 // * @returns {string} The area of the rectangle and unit of measure.
 // */

//---------------------------------------
/**
 * getting a random number between two number.
 *
 * @param {number} lower the smaller number.
 * @param {number} upper  the higher number.
 * @returns {number} random number between lower and upper.
 */




function getRandomNumber(lower,upper) {

    const random = Math.floor(Math.random() * (upper - lower + 1) + lower);
    document.querySelector('main').innerHTML = `<h2>The random number between ${lower} and ${upper} is ${random}</h2>`
    return random;

}



