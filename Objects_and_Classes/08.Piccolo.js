function piccolo(arrayInput) {
    let carsInParkingLot = [];

    arrayInput.forEach(element => {
        const carDetails = element.split(', ');
        const inOrOutOperation = carDetails[0];
        const carNumber = carDetails[1];

        if (inOrOutOperation === 'IN') {
            if (!carsInParkingLot.includes(carNumber)) {
                carsInParkingLot.push(carNumber);
            }
        } else if (inOrOutOperation === 'OUT') {
            const carFirstIndex = carsInParkingLot.indexOf(carNumber);

            if (carFirstIndex !== -1) {
                carsInParkingLot.splice(carFirstIndex, 1);
            }
        }
    });

    const sortedCarNumbersInParkingLot = carsInParkingLot.sort((a, b) => {
        let extractedNumberA = parseInt(a.slice(2, 6), 10);
        let extractedNumberB = parseInt(b.slice(2, 6), 10);

        return extractedNumberA - extractedNumberB;
    })

    return carsInParkingLot.length > 0 ? sortedCarNumbersInParkingLot.join('\n') : 'Parking Lot is Empty';
}

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
));
console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
));
