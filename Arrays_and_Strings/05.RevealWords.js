function revealWords(words, templates) {
    const splittedWords = words.split(", ");
    let resultString = templates;

    splittedWords.forEach(word => {
        const searchedWord = "*".repeat(word.length);
        const isExist = resultString.includes(searchedWord);

        if (isExist === true) {
            resultString = resultString.replace(searchedWord, word);
        }
    });

    return resultString;
}

function revealWords2(words, templates) {
    let resultString = templates;

    words.split(", ").forEach(word => {
        const searchedWord = "*".repeat(word.length);
        resultString = resultString.replace(searchedWord, word);
    });

    return resultString;
}

console.log(revealWords2('great', 'softuni is ***** place for learning new programming languages'));