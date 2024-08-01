function pascalCaseSplitter(template) {
    const regex = /[A-Z]{1}[a-z]*/g;
    let matches = template.matchAll(regex);
    let result = [];

    for (const match of matches) {
        result.push(match);
    }

    return result.join(", ");
}

console.log(pascalCaseSplitter('HoldTheDoor'));