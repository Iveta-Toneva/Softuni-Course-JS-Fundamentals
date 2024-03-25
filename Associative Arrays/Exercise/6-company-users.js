function companyUsers(array) {

    let companies = {};

    for (const line of array) {
        let [company, employee] = line.split(" -> ");
        if (!companies[company]) {
            companies[company] = [];
        }
        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }
    }

    let sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, employees] of sortedCompanies) {
        console.log(company);
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);