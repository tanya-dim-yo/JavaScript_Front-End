function wordsTracker(inputArray) {
    const occurences = {};
    const wordsToSearchFor = inputArray.shift().split(' ');

    wordsToSearchFor.forEach(word => {
        occurences[word] = 0;
    });

    inputArray.forEach(word => {
        if (occurences.hasOwnProperty(word)) {
            occurences[word] += 1;
        }
    })

    const sortedOccurences = Object.entries(occurences)
        .sort(([, a], [, b]) => b - a);

    let result = '';

    sortedOccurences.forEach(([word, count]) => {
        result += `${word} - ${count}\n`;
    });

    return result;
}

console.log(wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
));
