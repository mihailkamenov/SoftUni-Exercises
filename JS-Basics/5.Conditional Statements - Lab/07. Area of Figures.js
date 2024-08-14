function area(input) {
    let figure = input[0];
    let side = Number(input[1]);

    let area = 0;
    if (figure == "square") {
        area = side * side;
        console.log(area.toFixed(3));
    } else if (figure == "rectangle") {
        let sideB = Number(input[2]);
        area = side * sideB;
        console.log(area.toFixed(3));
    } else if (figure == "circle") {
        r = Number(input[2]);
        area = Math.PI * side * side;
        console.log(area.toFixed(3));
    } else if (figure == "triangle") {
        let h = Number(input[2]);
        area = side * h / 2;
        console.log(area.toFixed(3));
    }
}
area(["circle", "6"]);