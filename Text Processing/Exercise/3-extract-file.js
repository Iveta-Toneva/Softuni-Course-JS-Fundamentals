function extractFile(string) {

    let array = string.split("\\").pop().split(".");
    let fileName = "";
    let extension = "";

    if (array.length === 3) {
        fileName = array[0] + "." + array[1];
        extension = array[2];
    } else {
        fileName = array.shift();
        extension = array.shift();
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
