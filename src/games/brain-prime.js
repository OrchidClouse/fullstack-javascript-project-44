#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

function prime(n) {
  if (n < 2) {
    return false;
  } if (n === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}

export default function primeGame() {
  const number = Math.round(Math.random() * 100);
  let correctAns = '';
  if (prime(number)) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }

  return cons(number, correctAns);
};
