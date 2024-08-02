function smallestNumber(a, b, c) {
    return (a < b && a < c) ? a : b < c ? b : c;
}

console.log(smallestNumber(2, 5, 3));
console.log(smallestNumber(600, 342, 123));
console.log(smallestNumber(25, 21, 4));
console.log(smallestNumber(2, 2, 2));
