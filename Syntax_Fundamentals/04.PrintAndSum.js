function printAndSum(firstNumber, secondNumber) {
    let sum = 0;
    let numbers = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        numbers += i + " ";
        sum += i;
    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60)