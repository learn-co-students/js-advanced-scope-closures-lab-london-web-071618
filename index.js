function produceDrivingRange(distance) {
  return function blockRange(tripStart, tripEnd) {
    tripDistance = Math.abs(parseInt(tripStart) - parseInt(tripEnd))
    debugger
    if (tripDistance <= distance) {
      return `within range by ${distance - tripDistance}`
    } else {
      return `${tripDistance - distance} blocks out of range`
    }
  }
}


function produceTipCalculator(tipRate) {
  return function calcTip(bill) {
    return (bill * tipRate)
  }

}
