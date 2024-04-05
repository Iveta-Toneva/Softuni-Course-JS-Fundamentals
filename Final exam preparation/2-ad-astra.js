function calculateCalories(array) {

    let text = array.shift();
    let pattern = /([\||#]{1})(?<product>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let matches = text.matchAll(pattern);
    let totalCalories = 0;
    let outputArray = [];
    for (const match of matches) {
        totalCalories += Number(match.groups.calories);
        outputArray.push(`Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (const output of outputArray) {
        console.log(output);
    }

}
calculateCalories([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|'
]);