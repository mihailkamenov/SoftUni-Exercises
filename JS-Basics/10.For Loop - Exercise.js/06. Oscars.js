function oscars(input) {
    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let raters = Number(input[2]);

    let rating = 0;

    for (let i = 3; i <= (raters * 2) + 2; i += 2) {
        let nameOfTheRater = input[i];
        let pointsFromRaters = Number(input[i + 1]);

        if (i == 3) {
            rating = pointsFromAcademy + (nameOfTheRater.length * pointsFromRaters / 2);
        } else {
            rating += (nameOfTheRater.length) * pointsFromRaters / 2;
        }

        if (rating > 1250.5) {
            return console.log(`Congratulations, ${actorName} got a nominee for leading role with ${rating.toFixed(1)}!`);
        }
    }

    let pointsNeeded = 0;

    if (rating > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${rating.toFixed(1)}!`);
    } else {
        pointsNeeded = 1250.5 - rating;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",

    "340",

    "5",

    "Robert De Niro",

    "50",

    "Julia Roberts",

    "40.5",

    "Daniel Day-Lewis",

    "39.4",

    "Nicolas Cage",

    "29.9",

    "Stoyanka Mutafova",

    "33"])