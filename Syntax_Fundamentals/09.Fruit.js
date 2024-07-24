function fruit(fruit, weight, price) {
    return `I need $${((weight / 1000) * price).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`;
}

console.log(fruit('apple', 1563, 2.35));