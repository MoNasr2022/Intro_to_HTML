
/*const person ={
    name: 'Edward',
    city: 'New York',
    age: 27,
    isStudent: true,
    skills: ['JavaScript','HTML','CSS']
 };
for (const prop in person) {
    console.log(prop)
//
}



const message = `Hi, I am ${person.name}.`
const city = `${message} I live in ${person.city}`
// console.log(message)
// console.log(city)

person.nickName = 'duke';

// for (let prop in person){
//     console.log(`${prop}: ${person[prop]}`)}

const prop = Object.keys(person)
console.log(prop)
const value = Object.values(person)
console.log(`${prop}: ${value}`)
//---------------------------------------------------------------
const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
};

const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
};

const Person={
    ...name,
    ...role

}
console.log(Person)

 */
//=======================================================================
/*
const questions = [
    {question: 'How many planets are in the Solar System?', answer: '8'},
    {question:'How many continents are there?', answer:'7'},
    {question:'How many legs does an insect have?', answer:'6'},
    {question: 'What year was JavaScript created?', answer: '1995'}
];
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1

for ( let i = 0; i < questions.length; i++ ) {
    let question = questions[i].question;
    let answer = questions[i].answer;
    let response = prompt(question);

    if ( response === answer ) {
        correctAnswers++;
        correct.push(question);

    } else {
        incorrect.push(question);
    }
}
function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
*/

//===============================================
/*
  Create an array of 'pet' objects.
  Each object should have the following properties:
  name, type, breed, age, and photo
*/
