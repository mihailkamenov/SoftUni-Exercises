function tennisRanklist(input) {
    let tournamentsNumber = Number(input[0]);
    let pointsAtTheBeggining = Number(input[1]);

    let pointsAfter = 0;
    let wonTournaments = 0;

    for (let i = 2; i <= input.length; i++) {
        let stageFinished = input[i];
        switch (stageFinished) {
            case "W":
                pointsAfter += 2000;
                wonTournaments++;
                break;

            case "F":
                pointsAfter += 1200;
                break;

            case "SF":
                pointsAfter += 720;
                break;
        }


    }
    let finalPoints = pointsAtTheBeggining + pointsAfter;
    let averagePoints = pointsAfter / tournamentsNumber;
    let percentWon = wonTournaments / tournamentsNumber * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWon.toFixed(2)}%`);
}
tennisRanklist(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])