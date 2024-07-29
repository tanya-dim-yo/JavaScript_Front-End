function listOfNames(arr) {
    return arr.sort((firstName, secondName) => firstName.localeCompare(secondName)).map((name, i) => `${i + 1}.${name}`).join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));