function barcodes(array) {

    let pattern = /[@]{1}[#]+[A-Z]{1}(?<name>[A-Za-z\d]{4,})[A-Z]{1}[@]{1}[#]+/;
    let count = Number(array.shift());
    for (let index = 0; index < count; index++) {
        let currentLine = array.shift();
        let currentMatch = currentLine.match(pattern);
        if (currentMatch) {
            let group = "";
            for (const char of currentMatch.groups.name) {
                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    group += char;
                }
            }
            if (group === "") {
                group = "00";
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
barcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##",
]);