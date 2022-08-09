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

