// While Loops
/*
function getRandomNumber(upper){
    return Math.floor(Math.random()*upper )+1;
}

let counter = 0;
while (counter<10){
    console.log(`The random number is ${getRandomNumber(10)}`) ;
    counter+=1
}

 */
//--------------------------------

// do-while loop
/*
function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;

}
let counter = 0;

 do {                      //use do--while loop,  if you want your loop to execute at least one time before checking the condition
     console.log(`The random number is ${getRandomNumber(10)}`) ;
     counter++;

 }   while(counter < 10);

 */
//--------------------------------------

// let secret;
//
// do{
//      secret = prompt("What is the secret password?");
//
// }while(secret !=='sesame' )
// alert("You know the secret password. Welcome!");
//=====================================================================================

   // for loops

const getRandomColor = () => Math.floor(Math.random() * 256);
function randomRGB(){
    const color =`rgb(${getRandomColor()},${getRandomColor()}, ${getRandomColor()})`
    return color
}
let html= '';
for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`
}
document.querySelector('main').innerHTML = html


//------------------------------------------
/*
const secretWord ='TOMATO';
let message=` Access denied :(`;

for (let i = 5; i>=1; i--){
    let guess = prompt(`Enter the secret word. You have ${i} tries.`);
    if (guess.toUpperCase() === secretWord) {
        message = 'Welcome to the secret loop world'
        break
    }
}
alert(message)

 */
//=----------------------------

// const tMinus = 10;
// let message = 'Liftoff! 🚀';
//
// for ( let i = tMinus; i >= 1; i-- ) {
//     let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
//     if ( status === null || status.toLowerCase() === 'n' ) {
//         message = 'Abort launch!';
//         break;
//     }
// }
// alert(message);
 //=======================================
let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
    if ( i === message / 2 ) {
        console.log('The loop has terminated...');
        break
    }
    console.log(`Logging the number ${i}`);
}

console.log('The program continues...');