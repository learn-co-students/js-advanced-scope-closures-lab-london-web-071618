
const produceDrivingRange = distance => {
  return (start, end) => {
    travelledDistance = Math.abs(parseInt(end) - parseInt(start))
    if (travelledDistance <= distance) {
      return `within range by ${distance - travelledDistance}`
    } else {
      return `${travelledDistance - distance} blocks out of range`
    }
  }
}




const produceTipCalculator = percentage => {
  return fare => {
    return fare * percentage
  }
}


const createDriver = () => {
  let driverIdCount = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverIdCount
    }
  }
}
