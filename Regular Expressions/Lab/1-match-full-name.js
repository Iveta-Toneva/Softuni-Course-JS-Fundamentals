function matchFullName(string) {

    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let names = string.match(regEx);
    console.log(names.join(" "));

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");