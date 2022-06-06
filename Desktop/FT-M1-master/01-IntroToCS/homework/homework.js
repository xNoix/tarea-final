'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let binary = Array.from(String(num), Number);
  let numberArr = binary.reverse()

  for (let i= 0; i < numberArr.length; i++) {
    numberArr[i] = numberArr[i] * Math.pow(2, i);
  }

  let total = numberArr.reduce((a, b) => a + b, 0);

  return(total)
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
  }
  return(binary);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}