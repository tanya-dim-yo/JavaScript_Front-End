function storeProvision(inStockItemsArray, orderedItemsArray) {
    const inStockItems = {};

    inStockItemsArray.forEach((item, index) => {
        if (index % 2 === 0) {
            inStockItems[item] = Number(inStockItemsArray[index + 1]);
        }
    });

    orderedItemsArray.forEach((item, index) => {
        if (index % 2 === 0) {
            if (inStockItems[item] !== undefined) {
                inStockItems[item] += Number(orderedItemsArray[index + 1]);
            } else {
                inStockItems[item] = Number(orderedItemsArray[index + 1]);
            }
        }
    });

    for (const item in inStockItems) {
        console.log(`${item} -> ${inStockItems[item]}`);
    }
}

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);
