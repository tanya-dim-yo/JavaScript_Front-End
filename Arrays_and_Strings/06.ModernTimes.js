function modernTimes(str) {
    const regex = /#[A-Za-z]+\b/g;
    let resultWords = str.match(regex);

    if (resultWords) {
        resultWords = resultWords.map(word => word.replace("#", ""));
    }

    return resultWords.join("\n");
}

console.log(modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign'));