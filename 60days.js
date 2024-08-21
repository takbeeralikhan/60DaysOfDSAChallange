// // let array = [1, 2, 3, 4, 5, 6];

// // console.log(sumOfAllElementInArray(array));

// // function sumOfAllElementInArray(arr) {
// //   let sum = 0;
// //   for (i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   return sum;
// // }
// // function reverseArray(arr){

// //     let reverseArray = [];

// //     for(let i=arr.length-1; i>0; i--){
// //         reverseArray.push(arr[i])
// //     }

// //     return reverseArray;
// // }
// // function findMaxMin(arr){
// //     let max = arr[0];
// //     let min = arr[0];

// //     for(let i=0; i<arr.length; i++){

// //         if(arr[i]>max){
// //             max = arr[i];
// //         }

// //       if(arr[i]<min){
// //             min = arr[i];
// //         }
// //     }
// //     return {max, min};
// // }

// // print 2D dimenstional array

// // const matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // console.log("length of matrix", matrix.length, matrix[0].length);

// // for (let i = 0; i < matrix.length; i++) {
// //   for (let j = 0; j < matrix[i].length; j++) {
// //     console.log(matrix[i][j]);
// //   }
// // }

// //****************Add 2D arrays***************
// function addMatrices(matrixA, matrixB) {
//   // Get the number of rows and columns
//   const rows = matrixA.length;
//   const cols = matrixA[0].length;

//   // Create a new matrix to store the result
//   const result = [];

//   // Loop through each element and add corresponding elements
//   for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < cols; j++) {
//       // Add corresponding elements
//       row.push(matrixA[i][j] + matrixB[i][j]);
//     }
//     result.push(row);
//   }

//   return result;
// }

// const matrixA = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrixB = [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ];

// // Add the matrices
// const sumMatrix = addMatrices(matrixA, matrixB);

// // Display the result
// console.log(sumMatrix);


// //***************Matrix transposotion  ******************* */
// const  transposeMatrixA = [
//   [1,2,3],
//   [4,5,6]
// ];

// function transposeMatrix(matrixA){
//   console.log('cols', matrixA[0].length);
  
//   let  resultedMatrix = [];

//   for(let i=0; i<matrixA[0].length; i++){
//     resultedMatrix[i] =[];
//     for(let j=0; j<matrixA.length; j++){
//       resultedMatrix[i][j] = matrixA[j][i];
//         // 1, 2,3
//         // 
//     }
//   }

//   return resultedMatrix;
// }

// const result = transposeMatrix(transposeMatrixA);
// console.log(result);


////*********Bubble sort algorithm****************** */

function BubbleSort(arr, n){

  let i, j, temp;
  let swapped;
  for(i=0; i< n; i++){
    swapped= false;
    for(j=0; j<n-i; j++){
      if(arr[j]> arr[j+1]){
        temp= arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }

    }

    if(swapped == false)
      break;
  }

}

function printArray(arr, size){
  let i;
  for(i=0; i<size; i++){
    console.log(arr[i] + '');
  }
}

let arr = [6,5,4,3,2,1];
let  n = arr.length;

BubbleSort(arr, n);

printArray(arr, n);



