function passwordValidator(passwordString) {
    function length(passwordString) {
        return passwordString.length >= 6 && passwordString.length <= 10 ? true : 'Password must be between 6 and 10 characters';
    }

    function onlyLettersAndDigits(passwordString) {
        return /^[a-zA-Z0-9]+$/.test(passwordString) ? true : 'Password must consist only of letters and digits';
    }

    function atLeastTwoDigits(passwordString) {
        return /^(?=.*\d.*\d).+$/.test(passwordString)
            ? true
            : 'Password must have at least 2 digits';
    }

    const lengthResult = length(passwordString);
    const onlyLettersAndDigitsResult = onlyLettersAndDigits(passwordString);
    const atLeastTwoDigitsResult = atLeastTwoDigits(passwordString);

    let result = [];

    if (lengthResult !== true) result.push(lengthResult);
    if (onlyLettersAndDigitsResult !== true) result.push(onlyLettersAndDigitsResult);
    if (atLeastTwoDigitsResult !== true) result.push(atLeastTwoDigitsResult);

    return result.length === 0 ? 'Password is valid' : result.join("\n");
}

console.log(passwordValidator('logIn'));
console.log('---');
console.log(passwordValidator('MyPass12'));
console.log('---');
console.log(passwordValidator('Pa$s$s'));
console.log('---');
console.log(passwordValidator('12345a'));
