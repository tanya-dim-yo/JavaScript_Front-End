function solve() {
    const selectedOperation = document.getElementById('selectMenuTo');

    const binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';
    selectedOperation.appendChild(binaryOptionElement);

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectedOperation.appendChild(hexadecimalOptionElement);

    const inputNumber = document.getElementById('input');
    const outputField = document.getElementById('result');
    const convertButton = document.querySelector('button');

    convertButton.addEventListener('click', () => {
        const selectedOperationValue = selectedOperation.value;
        const number = parseInt(inputNumber.value, 10);

        if (selectedOperationValue === 'binary') {
            outputField.value = converToBinary(number);
        } else if (selectedOperationValue === 'hexadecimal') {
            outputField.value = converToHexadecimal(number);
        }
    });

    function converToBinary(number) {
        if (number === 0) {
            return '0';
        }

        let binaryResult = [];

        while (number > 0) {
            binaryResult.unshift(number % 2);
            number = Math.floor(number / 2);
        }

        return binaryResult.join('');
    }

    function converToHexadecimal(number) {
        if (number === 0) {
            return '0';
        }

        const hexValues = '0123456789ABCDEF';
        let hexadecimalResult = [];

        while (number > 0) {
            hexadecimalResult.unshift(hexValues[number % 16]);
            number = Math.floor(number / 16);
        }

        return hexadecimalResult.join('');
    }
}
