function stringSubstring(searchedWord, template) {
    const match = template.split(" ").find((x) => x.toLowerCase() === searchedWord.toLowerCase());

    return match ? searchedWord : `${searchedWord} not found!`;
}

function stringSubstring2(searchedWord, template) {
    const regex = new RegExp(`\\b${searchedWord}\\b`, "i");
    const result = template.match(regex);

    return result !== null ? searchedWord : `${searchedWord} not found!`;
}

console.log(stringSubstring2('javascript', 'JavaScript is a the best programming language'));