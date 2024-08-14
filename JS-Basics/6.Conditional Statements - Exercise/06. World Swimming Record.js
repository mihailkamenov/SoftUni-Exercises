function record(input) {
    let recordInSeconds = Number(input[0]);
    let metres = Number(input[1]);
    let metreInSeconds = Number(input[2]);

    let firstTime = metres * metreInSeconds;
    let addTime = Math.floor(metres / 15) * 12.5;
    let time = firstTime + addTime;
    let secondsNeeded = 0;

    if (time < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        secondsNeeded = time - recordInSeconds;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }
}
record((["10464", "1500", "20"]));