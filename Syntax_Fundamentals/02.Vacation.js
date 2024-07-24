function vacation(number, type, day) {
    const prices = {
        students: {
            friday: 8.45,
            saturday: 9.80,
            sunday: 10.46
        },
        business: {
            friday: 10.90,
            saturday: 15.60,
            sunday: 16.00
        },
        regular: {
            friday: 15.00,
            saturday: 20.00,
            sunday: 22.50
        }
    };

    const dayLower = day.toLowerCase();
    const typeLower = type.toLowerCase();

    if (typeLower === "business" && number >= 100) {
        number -= 10;
    }

    let finalCost;

    if (prices[typeLower] && prices[typeLower][dayLower]) {
        finalCost = number * prices[typeLower][dayLower];
    }

    if (typeLower === "students" && number >= 30) {
        finalCost *= 0.85;
    }

    if (typeLower === "regular" && number >= 10 && number <= 20) {
        finalCost *= 0.95;
    }

    return `Total price: ${finalCost.toFixed(2)}`;
}

console.log(vacation(30, "Students", "Sunday"));