function books(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hoursPerDay = pages / pagesPerHour / days;
    console.log(hoursPerDay);
}
books(["212", "20", "2"]);