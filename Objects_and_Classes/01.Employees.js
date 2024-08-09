function employees(arr) {
    const employeesList = {};

    arr.forEach(employee => {
        employeesList[employee] = employee.length;
    });

    const formattedEmployeesList = [];

    for (const employee in employeesList) {
        formattedEmployeesList.push(`Name: ${employee} -- Personal Number: ${employeesList[employee]}`);
    }

    return formattedEmployeesList.join('\n');
}

console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
));

// function employees2(arr) {
//     return arr.map(employee => `Name: ${employee} -- Personal Number: ${employee.length}`);
// }

// const employeeList = employees2([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

// employeeList.forEach(employee => console.log(employee));
