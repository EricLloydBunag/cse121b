/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let add1 = Number(document.querySelector('#add1').value);
    let add2  = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers (){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2  = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2  = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

/*const divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let factor1 = Number(document.querySelector('#dividend').value);
    let factor2  = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(factor1, factor2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);*/

document.querySelector('#divideNumbers').addEventListener('click', () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = dividend / divisor;
});

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13];
document.querySelector('#array').textContent = numberArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numberArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numberArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numberArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
const doubledArray = numberArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = doubledArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = doubledArray.reduce((sum, number) => sum + number, 0);
