// looping through a matrix / nested arrays
// function biggestElement(arr) {
//     for (let column = 0; column < 3; column++) { // switch the two for loops to loop column by row or row by column
//         for (let row = 0; row < 3; row++) {
//             console.log(arr[row][column]);
//         }
//     }
// }
function loopThroughMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i])) { // If the element is an array, recursively call the function
        loopThroughMatrix(matrix[i]);
          
      } else { // Otherwise, you can process the individual element here
        console.log(matrix[i]);
        // Add your logic for processing the element
      }
    }
  }
