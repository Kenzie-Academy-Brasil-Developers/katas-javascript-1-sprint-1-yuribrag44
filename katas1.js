function oneThroughTwenty () {
  let result = []
  for (let count = 1; count<=20; count++) {
    result.push(count)
  }
  return result
}
oneThroughTwenty()

function evensToTwenty() {
  let result = []
  for (let count = 2; count<=20; count+=2) {
    result.push(count)
  }
  return result
}
evensToTwenty()

function oddsToTwenty() {
  let result = []
  for (let count = 1; count<=20; count +=2) {
    result.push(count)
  }
  return result
}
oddsToTwenty()

function multiplesOfFive() {
  let result = []
  for (let count = 5; count <= 100; count+=5) {
    result.push(count)
  }
  return result
}      
multiplesOfFive()

function squareNumbers () {
  let result = []
  for (let number = 1; number <=10; number ++) {
    result.push(number*number)
  }
  return result
}
squareNumbers()
    

function countingBackwards() {
  let result = []
  for (let count = 20; count>=1; count-- ) {
    result.push(count)
  }
  return result
}
countingBackwards()

function evenNumbersBackwards() {
  let result = []
  for (let count = 20; count>=2; count-=2) { 
    result.push(count)
  }
  return result
 }
 evenNumbersBackwards()

 function oddNumbersbackwards() {
  let result = []
  for (let count = 19; count>=1; count-=2) {
    result.push(count)
  }
  return result
}
oddNumbersbackwards()

function multiplesOfFiveBackwards() { 
  let result = []
  for (let count = 100; count >= 5; count -=5) {
    result.push(count)
  }
    return result
}
multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let result = []
  for (let number = 10; number >= 1; number --) {
    result.push(number*number)
  }
  return result
}
squareNumbersBackwards()