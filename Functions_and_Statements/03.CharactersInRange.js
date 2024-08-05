function charactersInRange(firstChar, secondChar) {
    const startCode = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0)) + 1;
    const endCode = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0)) - 1;

    let resultCharString = [];

    for (let i = startCode; i <= endCode; i++) {
        resultCharString += String.fromCharCode(i) + ' ';
    }

    return resultCharString.trim();
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));
