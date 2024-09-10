function generateReport() {
    const outputField = document.getElementById('output');
    document.querySelector('button').addEventListener('click', generate);

    function generate() {
        const allCheckboxes = document.querySelectorAll('thead input[type="checkbox"]');
        const allRows = document.querySelectorAll('table tbody tr');
        const headersNamesAndIndexes = {};

        allCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const headerName = checkbox.name;
                headersNamesAndIndexes[headerName] = index;
            }
        });

        let result = [];

        allRows.forEach(row => {
            let rowData = {};

            for (const [headerName, index] of Object.entries(headersNamesAndIndexes)) {
                const cell = row.cells[index];
                rowData[headerName] = cell.textContent;
            }

            result.push(rowData);
        });

        outputField.textContent = JSON.stringify(result, null, 2);
    }
}
