class Driver {
  constructor (name) {
    this.name = name
  }

}

function produceDrivingRange (blockRange) {
  return function (start, end) {
    const starting = parseInt(start)
    const ending = parseInt(end)
    const travelled = ending - starting

    if (travelled < blockRange) {
      return `within range by ${blockRange - travelled}`
    } else {
      return `${travelled - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator (percentage) {
  return function (fare) {
    return (fare / 100) * (percentage * 100)
  }
}
