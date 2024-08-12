function inventory(heroesListInput) {
    const heroesList = [];

    heroesListInput.forEach(hero => {
        const heroDetails = hero.split(' / ');
        const heroName = heroDetails[0];
        const heroLevel = Number(heroDetails[1]);
        const heroItems = heroDetails[2];

        heroesList.push({ Hero: heroName, Level: heroLevel, Items: heroItems });
    });

    heroesList.sort((a, b) => a.Level - b.Level);

    heroesList.forEach(hero => {
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.Level}\nitems => ${hero.Items}`);
    });

    // let result = '';

    // heroesList.forEach(hero => {
    //     result += `Hero: ${hero.Hero}\nlevel => ${hero.Level}\nitems => ${hero.Items}\n`;
    // });

    // return result;
}

console.log(inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
));
