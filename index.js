function produceDrivingRange(blockRange) {
  return function (blockOne, blockTwo) {
    const blockDiff = blockTwo.substring(0, 2) - blockOne.substring(0, 2)
    console.log(blockTwo.substring(0, 2))
    console.log(blockDiff)
    if (blockDiff > blockRange) {
      return `${blockDiff - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - blockDiff}`
    }
  }
}

function produceTipCalculator(number) {
  return function(fare){
    return number * fare
  }
}

function createDriver() {
  let driverId = 0
  
  return class {
    constructor(name) {
        this.name = name
        this.id = ++driverId
    }
  }
}