function sumDigits(number) {
    let sum = 0;
    let numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
        sum += parseInt(numberAsString[i], 10);
    }

    return sum;
 }

console.log(sumDigits(543));

function sumDigits2(number) {
    let sum = 0;
    let currentNumber = number;

    while (currentNumber > 0) {
        sum += currentNumber % 10;
        currentNumber = parseInt(currentNumber / 10);
    }

    return sum;
 }

 function sumDigits3(number) {
    return number.toString().split("").map(Number).reduce((a, b) => a + b, 0);
 }

 console.log(sumDigits3(543));