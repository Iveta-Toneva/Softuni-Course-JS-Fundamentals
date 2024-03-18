function employees(stringArray) {
    
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    let arrayEmployees = [];

    for (let index = 0; index < stringArray.length; index++) {
        let currentEmployee = stringArray[index];
        let personalNumber = currentEmployee.length;
        let employee = new Employee(currentEmployee, personalNumber);
        arrayEmployees.push(employee); 
    }

    for (const object of arrayEmployees) {
        console.log(`Name: ${object.name} -- Personal Number: ${object.personalNumber}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);