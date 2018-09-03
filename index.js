

function produceDrivingRange(number){
  return function(start, end){

    let begin = parseInt(start);
    let ending = parseInt(end);
    let travelDist = Math.abs(ending - begin);
    let difference = number - travelDist;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
