function lunch(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = 0.125 * breakLength;
    let relaxTime = 0.25 * breakLength;

    let takenTime = lunchTime + relaxTime;
    let movieTime = breakLength - takenTime;

    if (movieTime >= episodeLength) {
        let timeLeft = Math.ceil(movieTime - episodeLength);
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episodeLength - movieTime);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    }
}
lunch(["Teen Wolf", "48", "60"]);