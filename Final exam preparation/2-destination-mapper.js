function destinationMapper(string) {

    let pattern = /([=|\/]{1})(?<destination>[A-Z]{1}[a-zA-Z]{2,})\1/g;
    let points = 0;
    let destinations = [];
    let matches = string.matchAll(pattern);
    for (const match of matches) {
        destinations.push(match.groups.destination);
    }
    for (const destination of destinations) {
        points += destination.length;
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");