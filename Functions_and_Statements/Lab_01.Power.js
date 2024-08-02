function recursivePower(base, radix, currentValue = 1) {
    if (radix === 0) {
        return currentValue;
    }

    currentValue *= base;
    return recursivePower(base, radix - 1, currentValue);
}

function recursivePower2(base, radix) {
    if (radix === 1) {
        return base;
    }

    return base * recursivePower(base, radix - 1);
}

console.log(recursivePower2(2, 8));
