'use strict';

const allBars = document.querySelectorAll('.bar');

const arr = [20, 23, 29, 21, 13, 2, 20, 23, 5, 31, 5, 5, 29, 4, 1, 4, 16, 19, 2, 9, 10, 23, 18, 32, 15, 10, 32, 11, 25, 31, 26, 24, 3, 4, 20, 28, 22, 26, 22, 12];


const getFakeCustomers = () => {
  return Math.floor(Math.random() * 32);

  // arr.push(random);
}

const visualizeData = () => {
  for (let i = 0; i < arr.length; i++) {
    allBars[i].style.height = arr[i] + '%'
  }
  console.log(arr);

}
visualizeData();

//get first element from arr and push it to the end.
const modifyArr = () => {
  const random = getFakeCustomers();
  let elementShifted = arr.shift();
  arr.push(random); //elementShifted
}
modifyArr()


//constantly loop through the two functions
const infinityLoop = () => {
  modifyArr();
  visualizeData()
  setTimeout(infinityLoop, 1000);
}
infinityLoop();














// function getNumberOfCustomers() {
//   return Math.floor(Math.random() * 32);
// }
// const queueSize = getNumberOfCustomers();
// console.log(queueSize);

// let i = 1;
// const arr = [];

// function populateArray() {

//   if (i > arr.length) {
//     arr.unshift(i);
//     i++
//     console.log(arr);

//   }


//   if (i > 9) {
//     arr.pop();
//   }
//   setTimeout(populateArray, 1000);

//   for (let i = 0; i < 40; i++) {
//   allBars[i].style.height += arr[i] + 'px';
// }

// }

// populateArray();









// 'use strict';

// const allBars = document.querySelectorAll('.bar');

// const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,];

// function modifyBars() {
//   numberArr.forEach(bar => {
//     allBars[bar].style.height = bar + 'px';
//   });
//   setTimeout(modifyBars, 1000);
// }

// modifyBars()