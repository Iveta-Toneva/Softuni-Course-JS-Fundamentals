function sortByLengthAndAlphabeticalValue(stringArray) {
  const compare = (a, b) => {
    return a.length - b.length || a.localeCompare(b);
  };
  stringArray.sort(compare);
  for (const el of stringArray) {
    console.log(el);
  }
}

sortByLengthAndAlphabeticalValue([
  "Isacc",
  "Theodor",
  "Jack",
  "Harrison",
  "George",
]);
