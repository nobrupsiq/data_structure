import { Stack } from './stack.js';

function decimalToBinary(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let restoDiv;
  let binaryString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    restoDiv = Math.floor(number % base);
    remStack.push(restoDiv);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
}

console.log(decimalToBinary(100345, 2));
