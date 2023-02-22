#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default function greet() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${username}!`);
};
