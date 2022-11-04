'use strict';

const firstNumberNode = document.getElementById('data-js-number1');
const secondNumberNode = document.getElementById('data-js-number2');
const operationNode = document.getElementById('data-js-operation');
const calcButtonNode = document.getElementById('calc-button');
  
calcButtonNode.addEventListener('click', (event) => {
  const firstNumber = firstNumberNode.value.trim();
  const secondNumber = secondNumberNode.value.trim();
  const operation = operationNode.value.trim();
  let output = document.getElementById('output');
  let result;
  
  const isfirstNumberEmpty = firstNumber === ''
    if(isfirstNumberEmpty) {
      console.log('First number input is empty'); 
      return (output.innerText = 'First number input is empty');
    };
  
  const isSecondNumberEmpty = secondNumber === ''
    if(isSecondNumberEmpty) {
      console.log('Second number input is empty');
      return (output.innerText = 'Second number input is empty');
    }

  const isOperationEmpty = operation === ''
    if(isOperationEmpty) {
      console.log('Operation input is empty');
      return (output.innerText = 'Operation input is empty');
    }  
  
  const isFirstNumberIncorrect = isNaN(firstNumber)
  const isSecondNumberIncorrect = isNaN(secondNumber)
  const isNumbersIncorrect = isFirstNumberIncorrect || isSecondNumberIncorrect
    if (isNumbersIncorrect) {
      console.log('Incorrect number input');
      return (output.innerText = 'Incorrect number input');
    }

  
  switch(operation) {
    case '+': {
      result = Number(firstNumber) + Number(secondNumber);
    } break;
      
    case '-': {
      result = Number(firstNumber) - Number(secondNumber);
    } break;
      
    case '*': {
      result = Number(firstNumber) * Number(secondNumber);
    } break;
      
    case '/': {
      result = Number(firstNumber) / Number(secondNumber);
    } break;

    default: {
      console.log('Unknown operation');
      return (output.innerText = 'Unknown operation');
    }
  }

  if (
    output !== 'Unknown operation' && (isNaN(result) || result === Infinity)) {
    console.log('Incorrect operation');
    return (output.innerText = 'Incorrect operation');
  } else {
    console.log(result);
    return (output.innerText = result);
  }
});