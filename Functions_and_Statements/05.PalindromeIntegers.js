function palindromeIntegers(arr) {
    let results = [];

    arr.forEach(number => {
        const numberInDigits = number.toString().split('');
        let isPalindrome = true;

        for (let i = 0; i < numberInDigits.length / 2; i++) {
            if (numberInDigits[i] !== numberInDigits[numberInDigits.length - i - 1]) {
                isPalindrome = false;
                break;
            }
        }

        results.push(isPalindrome);
    });

    return results.join("\n");
}

function palindromeIntegers2(arr) {
    return arr.map(number => {
        const numberAsString = number.toString();
        return numberAsString === numberAsString.split('').reverse().join('');
    }).join("\n");
}

console.log(palindromeIntegers2([123, 323, 421, 121]));
console.log(palindromeIntegers2([32, 2, 232, 1010]));
