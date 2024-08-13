function makeADictionary(stringInput) {
    const dictionary = {};

    stringInput.forEach(element => {
        const dictionaryTerm = JSON.parse(element);

        for (const term of Object.keys(dictionaryTerm)) {
            dictionary[term] = dictionaryTerm[term];
        }
    });

    const sortedDictionary = Object.fromEntries(
        Object.entries(dictionary)
            .sort(([keyA], [keyB]) => {
                return keyA.localeCompare(keyB);
            })
    );

    let result = '';

    for (const term of Object.keys(sortedDictionary)) {
        result += `Term: ${term} => Definition: ${sortedDictionary[term]}\n`;
    }

    return result.trim();
}

console.log(makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
));
