// 80/100

function namesOrder(arr) {
    let sortedArr = arr.sort();

    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}

namesOrder(["John","Bob","Christina","Ema"]);