//Exercise 1 Max of Two Numbers:
// function max(a,b){
//  return (a > b) ? a : b;

// }

// let maxNumber = max(100,200)
// console.log(maxNumber)

// Exercise 2 Landscape or Portrait:
// function isLandscape(width, height){
//     return (width > height);
// }
// console.log(isLandscape(300,600))

//Exercise 3 FizzBuzz:
// function fizzBuzz(input){
//     if(typeof input !== 'number')
//     return NaN;

//     if ((input % 3 === 0 ) &&( input % 5 === 0))
//     return 'FizzBuzz';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     return input;

// }

// const output= fizzBuzz(8)
// console.log(output)

// Excercise 4 Demerit Points:
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 6;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

checkSpeed(140);
