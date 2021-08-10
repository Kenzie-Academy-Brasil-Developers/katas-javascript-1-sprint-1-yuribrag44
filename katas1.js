function oneThroughTwenty() {
  let n = 1
  while(n<=20){console.log(n); n++} 
}
oneThroughTwenty()


function evensToTwenty() {
  let count = 2
  while (count<=20) {
    if (count%2==0) {
      console.log(count)
    }
    count ++
    }
  }
  evensToTwenty()

  function oddsToTwenty() {
    let count = 1
    while (count<=20){
      if (count%2!=0) {
        console.log(count)
      }
      count ++
    } 
    }
    oddsToTwenty()


function multiplesOfFive() { 
  let count = 5
  while(count <= 100) {    
    if (count%5==0) {
      console.log(count)
    }
    ++count
  }
  }
    multiplesOfFive()

  function squareNumbers() {
  let number = 1 
    let perfectSquare = number * number
    while (number <=100) {
      if ((perfectSquare = number * number) <= 100){
      console.log(perfectSquare)  
    }
    ++ number   
    }
  } 
  squareNumbers()
    

function countingBackwards(){
  let count = 20
  while (count >=1) {
    console.log(count); count --
  }
}

countingBackwards()

function evenNumbersBackwards() {
  let count = 20
  while (count>=2) {
    console.log(count);count --; count --
  }
  
 }
 evenNumbersBackwards()

 function oddNumbersbackwards() {
  let count = 19
  while (count>=1) {
    console.log(count);count --; count --;
  }

 }
 oddNumbersbackwards()

 function multiplesOfFiveBackwards() {
  let count = 100
  while (count>=5){
   if (count%5==0) {
    console.log(count); 
  }
  count --
}
}
multiplesOfFiveBackwards()


function squareNumbersBackwards() {
  let number = 10 
    let perfectSquare = number * number
    while (number >= 1) {
      if ((perfectSquare = number * number) >= 1){
      console.log(perfectSquare)  
    } if (perfectSquare <= 0){
      break
    }
    -- number   
    }
  } 
  squareNumbersBackwards()
