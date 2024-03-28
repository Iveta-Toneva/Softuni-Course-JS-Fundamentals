function cutAndReverse(string) {

    let firstPart = "";
    let secondPart = "";
    for (let index = 0; index < string.length / 2; index++) {
        firstPart += string[index];
    }
    for (let index = string.length / 2; index < string.length; index++) {
        secondPart += string[index];

    }
    firstPart = firstPart.split("").reverse().join("");
    secondPart = secondPart.split("").reverse().join("");
    console.log(firstPart);
    console.log(secondPart);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');