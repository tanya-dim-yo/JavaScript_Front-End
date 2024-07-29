function sortingNumbers(arr) {
    let resultArray = [];

    while (arr.length > 0) {
        let minElement = Math.min(...arr);
        arr.splice(arr.indexOf(minElement), 1);
        resultArray.push(minElement);

        if (arr.length > 0) {
            let maxElement = Math.max(...arr);
            arr.splice(arr.indexOf(maxElement), 1);
            resultArray.push(maxElement);
        }
    }

    return resultArray;
}

function sortingNumbers2(arr) {
    let sortedArray = arr.slice().sort((a, b) => a - b);
    let resultArray = [];

    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        if (leftIndex === rightIndex) {
            resultArray.push(sortedArray[leftIndex]);
        } else {
            resultArray.push(sortedArray[leftIndex]);
            resultArray.push(sortedArray[rightIndex]);
        }

        leftIndex++;
        rightIndex--;
    }

    return resultArray;
}

console.log(sortingNumbers2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));