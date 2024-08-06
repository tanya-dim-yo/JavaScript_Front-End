function printNxNMatrix(number) {
    const row = (number.toString() + ' ').repeat(number).trimEnd() + '\n';

    return row.repeat(number).trimEnd();
}

function printNxNMatrix2(number) {
    const row = (number + ' ').repeat(number).trimEnd();

    for (let i = 0; i < number; i++) {
        console.log(row);
    }
}

console.log(printNxNMatrix2(3));
console.log(printNxNMatrix2(7));
console.log(printNxNMatrix2(2));
