function sum(a, b, c) {
    let sumResult = a + b;

    function subtract(sum, c) {
        return sum - c;
    }

    return subtract(sumResult, c);
}

function sum2(a, b, c) {
    let sumResult = a + b;
    const subtract = (sum, c) => sum - c;
    return subtract(sumResult, c);
}


console.log(sum2(23, 6, 10));
console.log(sum2(1, 17, 30));
console.log(sum2(42, 58, 100));
