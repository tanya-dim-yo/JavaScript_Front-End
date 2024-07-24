function roadRadar(speed, area) {
    const areas = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130,
    };

    let speedDifference = speed - areas[area];
    let status = speedDifference <= 20 ? "speeding" : speedDifference <= 40 ? "excessive speeding" : "reckless driving";
    let resultInLimit = `Driving ${speed} km/h in a ${areas[area]} zone`;
    let resultOverLimit = `The speed is ${speedDifference} km/h faster than the allowed speed of ${areas[area]} - ${status}`;

    return speed <= areas[area] ? resultInLimit : resultOverLimit;
}

console.log(roadRadar(200, 'motorway'));