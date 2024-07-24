// function multiply(number) {
//     let result = "";

//     for (let i = 1; i <= 10; i++) {
//         result += `${number} X ${i} = ${number * i}\n`;
//     }

//     console.log(result);
// }

function multiply(number) {
    const results = Array.from({ length: 10 }, (_, i) => `${number} X ${i + 1} = ${number * (i + 1)}`).join('\n');
    console.log(results);
}


multiply(2);