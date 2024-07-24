function cookingByNumbers(...args) {
    let number = parseInt(args[0]);

    const operations = {
        "chop": () => number /= 2,
        "dice": () => number = Math.sqrt(number),
        "spice": () => number += 1,
        "bake": () => number *= 3,
        "fillet": () => number -= number * 0.2
    };

    const numbers = [];

    for (let i = 1; i < args.length; i++) {
        const operation = args[i];

        if (operations[operation]) {
            operations[operation]();
            numbers.push(number);
        }
    }

    return numbers.join("\n");
}

console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));