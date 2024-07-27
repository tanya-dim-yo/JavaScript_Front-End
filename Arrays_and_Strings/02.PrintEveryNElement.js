function printEveryNElement(arr, number) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i += number) {
        resultArray.push(arr[i]);
    }

    return resultArray;
}

function printEveryNElement2(arr, number) {
    return arr.filter((_, index) => index % number === 0);
}

console.log(printEveryNElement2(['1', '2', '3', '4', '5'], 6));