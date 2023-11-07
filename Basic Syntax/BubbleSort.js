console.log([234, 43, 55, 63, 5, 6, 235, 547])
console.log("-------------------")

function bubleSort(arr) { 
    let count = 0;
    for (let i = 0; i < arr.length; i++) { 
  
        // last i elements are already in place   
        for (let j = 0; j < (arr.length - i - 1); j++) { // 
            count++
            // checking if the item at present iteration  
            // is greaater than the next iteration
            if (arr[j] > arr[j + 1]) { 
  
                // If the condition is true 
                // then swap them 
                let temp = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temp 
            } 
        } 
    }

}
let arr = [234, 43, 55, 63, 5, 6, 235, 547]; 
bubleSort(arr);