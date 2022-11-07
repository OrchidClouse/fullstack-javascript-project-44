#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

export default () => {
  const firstNum = Math.round(Math.random() * 10);
  const add = Math.round(Math.random() * 10);
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(firstNum + add * i);
  }

  const hideSymbol = Math.round(Math.random() * (arr.length - 1));
  const correctAnswer = arr[hideSymbol];
  arr[hideSymbol] = '..';

  return cons(arr.join(' '), correctAnswer.toString());
};
