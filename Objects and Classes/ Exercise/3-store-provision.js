function storeProvision(productArray, deliveryArray) {
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }

    let shopProducts = [];
    for (let index = 0; index < productArray.length; index++) {
        let name = productArray[index];
        let quantity = Number(productArray[++index]);
        let currentProduct = new Product(name, quantity);
        shopProducts.push(currentProduct);
    }
    for (let index = 0; index < deliveryArray.length; index++) {
        let name = deliveryArray[index];
        let quantity = Number(deliveryArray[++index]);
        let isNew = true;
        for (const object of shopProducts) {
            if (object.name === name) {
                object.quantity += quantity;
                isNew = false;
            }
        }
        if (isNew) {
            let newProduct = new Product(name, quantity);
            shopProducts.push(newProduct);
        }
    }
    for (const object of shopProducts) {
        console.log(`${object.name} -> ${object.quantity}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
], ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30']);