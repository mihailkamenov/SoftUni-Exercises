function work(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (day != "Sunday" && hour >= 10 && hour <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }
}
work(["11", "Monday"]);