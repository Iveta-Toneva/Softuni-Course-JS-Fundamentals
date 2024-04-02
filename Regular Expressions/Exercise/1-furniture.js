function furniture(array) {

    let regEx = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let totalPrice = 0;
    let currentCommand = array.shift();

    console.log(`Bought furniture:`);

    while (currentCommand !== "Purchase") {

        let currentData = currentCommand.match(regEx);
        if (currentData) {
            console.log(currentData.groups.name);
            totalPrice += (Number(currentData.groups.price) * Number(currentData.groups.quantity));
        }
        currentCommand = array.shift();
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);