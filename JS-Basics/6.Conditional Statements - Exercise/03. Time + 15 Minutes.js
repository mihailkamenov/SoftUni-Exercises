function time(input) {
    let hoursBefore = Number(input[0]);
    let minutesBefore = Number(input[1]);

    let addMinutes = 15;
    let minutesM = (minutesBefore + addMinutes);

    let addHours = 0;
    let hours = hoursBefore;
    let minutes = minutesM % 60;

    if (minutesM > 59) {
        addHours = Math.floor(minutesM / 60);
        hours = hoursBefore + addHours;
        minutes = minutesM % 60
    }

    if (hours > 23) {
        hours = hours % 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
time(["1", "46"]);