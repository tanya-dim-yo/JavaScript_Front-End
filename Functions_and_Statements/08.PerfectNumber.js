function perfectNumber(number) {
    let sumOfDivisors = 1;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    return number === sumOfDivisors ? 'We have a perfect number!' : "It's not so perfect.";
}

function perfectNumber2(number) {
    let sumOfDivisors = 1;
    const sqrtOfNumber = Math.sqrt(number);

    for (let divisor = 2; divisor <= sqrtOfNumber; divisor++) {
        if (number % divisor === 0) {
            sumOfDivisors += divisor;

            if (divisor !== number / divisor) {
                sumOfDivisors += number / divisor;
            }
        }
    }

    return number === sumOfDivisors ? 'We have a perfect number!' : "It's not so perfect.";
}

console.log(perfectNumber2(6));
console.log(perfectNumber2(12));
console.log(perfectNumber2(28));
console.log(perfectNumber2(496));
console.log(perfectNumber2(1236498));


