function oddOccurences(inputString) {
    const wordsAsObject = {};
    const inputStringAsArray = inputString.split(' ');

    inputStringAsArray.forEach(element => {
        if (typeof element === 'string') {
            const wordInLowerCase = element.toLowerCase();

            if (!wordsAsObject.hasOwnProperty(wordInLowerCase)) {
                wordsAsObject[wordInLowerCase] = 0;
            }

            wordsAsObject[wordInLowerCase] += 1;
        }
    });

    let resultString = '';

    for (const word in wordsAsObject) {
        if (wordsAsObject[word] % 2 !== 0) {
            resultString += word + ' ';
        }
    }

    return resultString.trim();
}

console.log(oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
console.log(oddOccurences('Cake IS SWEET is Soft CAKE sweet Food'));
