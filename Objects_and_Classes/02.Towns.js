function towns(arr) {
    arr.forEach(element => {
        const [townName, lat, long] = element.split(' | ');
        const townInfo = {};

        townInfo.town = townName;
        townInfo.latitude = Number(lat).toFixed(2);
        townInfo.longitude = Number(long).toFixed(2);

        console.log(townInfo);
    });
}

function towns2(arr) {
    const towns = arr.reduce((separateTown, arrayElement) => {
        const [town, lat, long] = arrayElement.split(' | ');
        separateTown[town] = {
            latitude: Number(lat).toFixed(2),
            longitude: Number(long).toFixed(2),
        };

        return separateTown;
    }, {});

    return towns;
}

console.log(towns2(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
));
