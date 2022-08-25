// const planets =[
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars'
// ];
// -------------------
// console.log(planets[0])
//
// const instruments = ['piano', 'drums', 'trumpet'];
// instruments.push('guitar','violin','triangle');
// console.log(instruments)
// instruments.unshift('cowbell', 'tuba');
// -------------------
//
// const numbers = [100, 200, 300, 400, 500];
// ------------------------------------
// const middle = ['lettuce', 'cheese', 'patty'];
// const burger = ['top bun', 'bottom bun'];
// const x = ['top bun', middle , 'bottom bun']; // 2 dimensional array
// spreed syntax ...and the name of the array
//
// const y =['top bun', ...middle , 'bottom bun']; // ...middle
//
// const food = [...middle,...burger];
// console.log(food)
// ---------------------------------
//  Max and Min of an array
//
// const numbers = [100, 200, 300, 400, 500];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));
// const numbersCopy = [...numbers, ]
// const pop =numbersCopy.pop();
//=======================================================
//Using a 'for' Loop to Iterate Over an Array

// const playlist = [
//     'So What',
//     'Respect',
//     'What a Wonderful World',
//     'At Last',
//     'Three Little Birds',
//     'The Way You Look Tonight'
// ];
//
// function creatListItems(arr) {
//     let listItem = '';
//     for (let i =0; i< arr.length; i++){
//         listItem+= `<li>${arr[i]}</li>`
//     }
// return listItem;
// }
// document.querySelector('main').innerHTML =`
//     <ol>
//     ${creatListItems(playlist)}
//
//     </o>
// `;
//======================================================
              //some array methods
//console.log(fruit.indexOf('pear'));
// sort() - Sort the elements of an array in place and return the sorted array.
// isArray() - Determine whether the passed value is an Array.
// concat() - Merge two or more arrays.
// splice() - Change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// slice() - Return a portion of an array into a new array.

// console.log(fruit.sort())
// console.log(fruit.isArray)
// const hamada = daysInWeek.concat(fruit)
 //======================================================
//Example
//
// const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// const search = prompt('Search for a product.');
// let message;
//
// if(!search ){
//    message =`<strong>In Stock:</strong> ${inStock.join(', ')}.`;
//
// } else if (inStock.includes(search.toLowerCase())){
//     message=`Yes we have <strong class=lion>${search.toLowerCase()}</strong>. It is number #${inStock.indexOf(search.toLowerCase()) +1} on the list`;
//
// }else{
//     message=`Sorry, we do not have <strong>${search}</strong>. `
//
// }
// document.querySelector('main').innerHTML=`<p>${message}</p>`
//======================================================================

/*

                           //Multidimensional Array
const playlist = [
    ['So What','Miles Davis', '9:04'],
    ['Respect','Aretha Franklin', '2:45'],
    ['What a Wonderful World','Louis Armstrong', '2:21'],
    ['At Last','Ella Fitzgerald', '4:18'],
    ['Three Little Birds','Bob Marley', '3:01']
];


function creatListItems(arr) {
    let listItem = '';
    for (let i =0; i< arr.length; i++){
        listItem+= `<li>${arr[i][0]}, by ${arr[i][1]} - ${arr[i][2]}</li>`
    }
return listItem;
}
document.querySelector('main').innerHTML =`
    <ol>
    ${creatListItems(playlist)}

    </o>
*/

//---------------------------------------------------
// 1. Create a multidimensional array to hold quiz questions and answers


// 2. Store the number of questions answered correctly


/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/


// 4. Display the number of correct answers to the user
/*
const qAndA= [
    ['Who is the best player in the world', 'ronaldo'],
    ['Who many champions league he won', '5'],
    ['In which team does he play now', 'manunited']
]
let score = 0;
let questionsAnswered=[];
let questionsNotAnswered=[];

for(let i =0; i<qAndA.length;i++) {
    let question = qAndA[i][0]
    let response = prompt(question)
    let answer = qAndA[i][1]
    if (response.toLowerCase() === answer) {
        score++;
        questionsAnswered += `<li>${ qAndA[i][0]}</li>`

    } else {
        questionsNotAnswered += `<li>${ qAndA[i][0]}</li>`
    }
}
let html = `<h1>You got ${score} question(s) correct</h1>`
let listAnsweredQ= `<h2>You got these question(s) right:</h2> ${questionsAnswered}`
let listNotAQuestions=`<h2>You got these question(s) wrong:</h2> ${questionsNotAnswered}`

document.querySelector("main").innerHTML= `${html} 
<ol>${listAnsweredQ}</ol>
<ol>${listNotAQuestions}</ol>
`


 */
//===============================================================\



const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const  cities = data.split(',')
console.log(cities)