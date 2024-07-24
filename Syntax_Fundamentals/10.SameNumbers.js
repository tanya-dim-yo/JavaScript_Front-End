function sameNumbers(number) {
    const arr = number.toString().split("").map(Number);
    const matchingDigit = arr[0];
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== matchingDigit) {
            areSame = false;
        }
        
        sum += arr[i];
    }

    return `${areSame}\n${sum}`;
}

console.log(sameNumbers(212));