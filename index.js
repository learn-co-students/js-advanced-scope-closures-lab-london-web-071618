function produceDrivingRange(blockRange) {
   return function(block1, block2) {
     let number = parseInt(block2) - parseInt(block1)
     if  (number > blockRange) {
       return `${number-blockRange} blocks out of range`
     } else {return `within range by ${blockRange - number}`}
   }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent
  }
}