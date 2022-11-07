#!/usr/bin/env node

import {cons} from "@hexlet/pairs";
// import readlineSync from "readline-sync";

// console.log('Welcome to the Brain Games!');
// const name = readlineSync.question('May I have your name? ');
// console.log(`Hello, ${name}!`);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default () => {
  const number = getRandomInt(1,50);
  let correctAns = '';
  if(number % 2 === 0){
    correctAns = 'yes'
  } else{
    correctAns = 'no'
  }
  return cons(number, correctAns)
}

// console.log('Answer "yes" if the number is even, otherwise answer "no"');
// let count = 0;
// function gameEven() {
//   let i = 0
//   while(i <= 2){
//   const num = getRandomInt(1,50);
//   console.log('Question: ' + num)
//   const ans = readlineSync.question('Answer: ')
//   i += 1
//   if(num % 2 === 0){
//     (ans === 'yes') ? console.log('Correct!') : console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
// Let's try again, ${name}!`) || (i += 5);
//     }else if(num % 2 !== 0){
//     (ans === 'no') ? console.log('Correct!') : console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
// Let's try again, ${name}!`) || (i += 5); 
//     }
// }
//   count++
// }
// if(count === 3){
//   console.log(`Congratulations, ${name}!`)
  
// }