function time(input) {
    let minutesBefore = Number(input[0]) * 60 + Number(input[1]);
    let minutesAfter = minutesBefore + 15;

    let hours = Math.floor(minutesAfter / 60);
    let minutes = minutesAfter % 60;

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
time(["1", "46"]);