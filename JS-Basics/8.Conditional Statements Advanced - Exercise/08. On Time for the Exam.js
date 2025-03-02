function onTimeForTheExam(examHour, examMinutes, arrivingHour, arrivingMinutes) {
    let examTime = examHour * 60 + examMinutes;
    let timeArrival = arrivingHour * 60 + arrivingMinutes;

    let status;
    let timeBefore;
    let timeAfter;
    let message;

    if (examTime >= timeArrival) {
        if (examTime === timeArrival || examTime - 31 < timeArrival) {
            status = "On time";
            if (examTime === timeArrival) {
                return console.log(status);
            } else {
                timeBefore = examTime - timeArrival;
            }
        } else {
            status = "Early";

            timeBefore = examTime - timeArrival;
        }
    } else {
        status = "Late";

        timeAfter = timeArrival - examTime;
    }

    if (status === "Late") {
        if (timeAfter < 60) {
            message = `${timeAfter} minutes after the start`;
        } else {
            let hours = Math.floor(timeAfter / 60);
            let minutes = timeAfter % 60;
            if (minutes === 0) {
                message = `${hours}:00 hours after the start`
            } else if (minutes < 10) {
                message = `${hours}:0${minutes} hours after the start`;
            } else {
                message = `${hours}:${minutes} hours after the start`;
            }
        }
    } else {
        if (timeBefore < 60) {
            message = `${timeBefore} minutes before the start`;
        } else {
            let hours = Math.floor(timeBefore / 60);
            let minutes = timeBefore % 60;
            if (minutes === 0) {
                message = `${hours}:00 hours before the start`
            } else if (minutes < 10) {
                message = `${hours}:0${minutes} hours before the start`;
            } else {
                message = `${hours}:${minutes} hours before the start`;
            }
        }
    }
    console.log(status);
    console.log(message);
}
onTimeForTheExam(11, 30, 9, 30)