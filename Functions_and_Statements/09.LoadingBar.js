function loadingBar(percent) {
    function printMessage(percent) {
        return percent === 100 ? '100% Complete!' : 'Still loading...';
    }

    function printBar(percent) {
        return percent === 100 ? `[%%%%%%%%%%]` : `${percent}% [${"%".repeat(percent / 10) + ".".repeat(10 - (percent / 10))}]`;
    }

    return `${printBar(percent)}\n${printMessage(percent)}`;
}

function loadingBar2(percent) {
    if (percent === 100) {
        return `[%%%%%%%%%%]\n100% Complete!`;
    } else {
        const bar = `[${"%".repeat(percent / 10) + ".".repeat(10 - (percent / 10))}]`;
        return `${percent}% ${bar}\nStill loading...`;
    }
}

console.log(loadingBar2(30));
console.log('-----');
console.log(loadingBar2(50));
console.log('-----');
console.log(loadingBar2(100));
