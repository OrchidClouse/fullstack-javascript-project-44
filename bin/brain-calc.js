import { cons } from "@hexlet/pairs";
import readlineSync from "readline-sync";
console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);

function gameCalc(){
  let correctAnswer = 0;
  const signs = ['+', '-', '*'];
  const firstNum = Math.round(Math.random() * 10);
  const secondNum = Math.round(Math.random() * 10);
  const sign = Math.round(Math.random() * 2);
  console.log(`What is the correctAnswer of the expression? ${firstNum} ${signs[sign]} ${secondNum}`)
  let userAnswer = readlineSync.question('Answer ')
  if(signs[sign] === '+'){
     userAnswer === correctAnswer ? console.log('Correct!') : console.log('wrong')
  } else if(signs[sign] === '-'){
    correctAnswer = firstNum - secondNum || userAnswer === correctAnswer ? console.log('Correct!') : console.log('wrong')
  } else if(signs[sign] === '*'){
    correctAnswer = firstNum * secondNum || userAnswer === correctAnswer ? console.log('Correct!') : console.log('wrong')
  }
  console.log(cons(8, 'hello'))
}
gameCalc()