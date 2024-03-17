function createCats(arrayInput) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let index = 0; index < arrayInput.length; index++) {
        [catName, age] = arrayInput[index].split(" ");
        age = Number(age);
        let cat = new Cat(catName, age);
        cat.meow();
    }

}
createCats(['Mellow 2', 'Tom 5']);