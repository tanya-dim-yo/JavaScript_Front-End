function arrayRotation(arr, numberOfRotation) {
    for (let i = 0; i < numberOfRotation; i++) {
        arr.push(arr.shift());
    }

    return arr.join(" ");
}

function arrayRotation2(arr, numberOfRotation) {
    const arrLength = arr.length;
    const effectiveRotations = numberOfRotation % arrLength;

    if (effectiveRotations === 0) {
        return arr.join(" ");
    } else {
        return arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations)).join(" ");
    }
}

console.log(arrayRotation2([32, 21, 61, 1], 4));