let array = [1, 2, 3, 4, 5, 6];

console.log(sumOfAllElementInArray(array));

function sumOfAllElementInArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// function reverseArray(arr){

//     let reverseArray = [];

//     for(let i=arr.length-1; i>0; i--){
//         reverseArray.push(arr[i])
//     }

//     return reverseArray;
// }
// function findMaxMin(arr){
//     let max = arr[0];
//     let min = arr[0];

//     for(let i=0; i<arr.length; i++){

//         if(arr[i]>max){
//             max = arr[i];
//         }

//       if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return {max, min};
// }
