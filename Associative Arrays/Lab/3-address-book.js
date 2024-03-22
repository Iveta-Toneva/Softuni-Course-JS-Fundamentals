function addressBookInfo(array) {

    let addressBook = {};
    for (const line of array) {
        let [name, address] = line.split(":");
        addressBook[name] = address;
    }

    let arrayAddressBook = Object.entries(addressBook);
    arrayAddressBook.sort(([namea, addressa], [nameb, addressb]) => namea.localeCompare(nameb));
    for (const [name, address] of arrayAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}
addressBookInfo(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);