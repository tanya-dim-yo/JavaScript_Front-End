function factorialDivision(firstNumber, secondNumber) {
    function calculateFactorial(number) {
        let result = 1;

        for (let i = number; i > 1; i--) {
            result *= i;
        }

        return result;
    }

    return (calculateFactorial(firstNumber) / calculateFactorial(secondNumber)).toFixed(2);
}

function factorialDivision2(firstNumber, secondNumber) {
    function calculateFactorial(number, currentValue = 1) {
        if (number <= 1) {
            return currentValue;
        }

        return calculateFactorial(number - 1, number * currentValue);
    }

    const firstNumberFactorial = calculateFactorial(firstNumber);
    const secondNumberFactorial = calculateFactorial(secondNumber);

    return (firstNumberFactorial / secondNumberFactorial).toFixed(2);
}

console.log(factorialDivision2(5, 2));
console.log(factorialDivision2(6, 2));
