function oddAndEvenSum(number) {
    const digits = number.toString().split('').map(Number);

    const evenDigitsSum = digits
        .filter(digit => digit % 2 === 0)
        .reduce((sum, digit) => sum + digit, 0);

    const oddDigitsSum = digits
        .filter(digit => digit % 2 !== 0)
        .reduce((sum, digit) => sum + digit, 0);

    return `Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
