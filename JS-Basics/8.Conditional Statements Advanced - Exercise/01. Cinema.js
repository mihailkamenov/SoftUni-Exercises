function cinema(type, rows, columns) {
    // let type = input[0];
    // let rows = Number(input[1]);
    // let columns = Number(input[2]);

    let sumSeats = rows * columns;
    let price = 0;
    if (type == "Premiere") {
        price = sumSeats * 12;
    } else if (type == "Normal") {
        price = sumSeats * 7.50;
    } else {
        price = sumSeats * 5;
    }

    console.log(`${price.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);