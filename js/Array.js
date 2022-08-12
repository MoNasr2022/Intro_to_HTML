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
const daysInWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
console.log(daysInWeek.join(' ')) //used to display the array elements in the way you want

const fruit = [
    'apple',
    'orange',
    'grapefruit',
    'pineapple',
    'strawberry'
];
console.log(fruit.includes('apple'))// asks if the array has specific element (case-sensitive)
console.log(fruit.indexOf('apple'));// used to get the number of an element in the array
console.log(fruit.indexOf('pear'));
// sort() - Sort the elements of an array in place and return the sorted array.
// isArray() - Determine whether the passed value is an Array.
// concat() - Merge two or more arrays.
// splice() - Change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// slice() - Return a portion of an array into a new array.

console.log(fruit.sort())
console.log(fruit.isArray)
const hamada = daysInWeek.concat(fruit)
 //======================================================
//Example

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
if (inStock.includes(search)){
    message=`Yes we have <strong class=lion>${search}</strong>.`;

}else{
    message=`Sorry we do not have <strong>${search}</strong>.`

}
document.querySelector('main').innerHTML=`<p>${message}</p>`