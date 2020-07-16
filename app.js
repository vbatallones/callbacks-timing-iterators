// function greeting (name, callback) {
//     let sentence = 'Hello, my name is '+ name;

//    let otherSentence = callback();

//    return sentence + otherSentence
// }

// function anotherGreeting() {
//     let sentence = ' I forgot my last name';
    
//     return sentence;
// }

// let myName = 'Levin';
// console.log(greeting(myName, anotherGreeting));

// function printArray(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         let numbers = array[i];

//         console.log(numbers);
//     }
//     callback(array);
// }

// function printArrayAgain(array) {
//     for (let i = 0; i < array.length; i++) {
//         let number = array[i];

//         console.log(number);
//     }
// }

// const numberArray = [1,2,3,4,5,6,7,8,9];

// printArray(numberArray, printArrayAgain);

// function calculator (num1, num2, callbackOne, callbackTwo) {
//     let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

//     return result;
// }

// function addNumbers(num1, num2) {
  
//     let result = num1 + num2; 
//     return result;
// }

// function subtractNumbers(num1, num2) {
//     let result = num1 - num2;
//     return result;
// }

// console.log(calculator(5,77, addNumbers, subtractNumbers));

function superHero (callbackOne, callbackTwo) {
    let result =  callbackOne() + 'and' + callbackTwo()
    return result;
} 

function superPowers () {
    let sentence = " I can jump 1000ft ";
    return sentence;
}

function superPowersTwo () {
    let sentence = " I can side step quickly";
    return sentence;
}

console.log(superHero(superPowers, superPowersTwo));