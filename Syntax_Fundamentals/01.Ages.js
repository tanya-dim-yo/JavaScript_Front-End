function ages(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age <= 13) {
        console.log("child");
    } else if (age <= 19) {
        console.log("teenager");
    } else if (age <= 65) {
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

ages(60);


function ages2(age) {
    if (age >= 0 && age <= 2) {
        return "baby";
    } else if (age >= 3 && age <= 13) {
        return "child";
    } else if (age >= 14 && age <= 19) {
        return "teenager";
    } else if (age >= 20 && age <= 65) {
        return "adult";
    } else if (age >= 66) {
        return "elder";
    } else {
        return "out of bounds";
    }
}

console.log(ages2(-1)); // "out of bounds"