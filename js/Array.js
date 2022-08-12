const planets =[
    'Mercury',
    'Venus',
    'Earth',
    'Mars'
];
//-------------------
console.log(planets[0])

const instruments = ['piano', 'drums', 'trumpet'];
instruments.push('guitar','violin','triangle');
console.log(instruments)
instruments.unshift('cowbell', 'tuba');
//-------------------

//const numbers = [100, 200, 300, 400, 500];
//------------------------------------
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', 'bottom bun'];
const x = ['top bun', middle , 'bottom bun']; // 2 dimensional array
// spreed syntax ...and the name of the array

const y =['top bun', ...middle , 'bottom bun']; // ...middle

const food = [...middle,...burger];
console.log(food)
//---------------------------------
// Max and Min of an array

const numbers = [100, 200, 300, 400, 500];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
const numbersCopy = [...numbers, ]
const pop =numbersCopy.pop();
