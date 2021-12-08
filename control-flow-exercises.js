

/**
 * Hour
 * If hour is between 6am and 12pm:Good Morning
 * If it is between 12pm and 6pm: Good afternoon
 * Otherwise: Good Evening 
 */

// let hour = 10;

// if (hour >= 6 && hour < 12 ){
//     console.log('Good Morning')
// }
// else if ( hour >= 12 && hour < 18){
//     console.log('Good Afternoon')
// }
// else{
//     console.log('Good Evening')
// }

// for(let i =1; i <= 5; i++){
//     if(i % 2 !== 0 ) console.log(i)
// }

// let i = 0;
// while (i <= 5){
//     if(i % 2 !== 1 ) console.log(i)
//     i++;
// }

// let i = 0;
// do{
//     if(i % 2 !== 1 ) console.log(i)
//      i++;
// } while(i <= 5);








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
  const kmPerPoint = 7;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

checkSpeed(140);
