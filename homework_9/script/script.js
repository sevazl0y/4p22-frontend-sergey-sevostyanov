'use strict';

function makeFibonacciFunction() {
  let first = -1;
  let next = 1;
  
  // функция-помощник
  return () => {
    const last = first + next;
      first = next;
      next = last;
      console.log(last);
    return last;
  }
};

const fibonacci = makeFibonacciFunction();

fibonacci(); // Вывод в консоль: 0 (последовательность начинается с 0)
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5
fibonacci(); // Вывод в консоль: 8
fibonacci(); // Вывод в консоль: 13
fibonacci(); // Вывод в консоль: 21