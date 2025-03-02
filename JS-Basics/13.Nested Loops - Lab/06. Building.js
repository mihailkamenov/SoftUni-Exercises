function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let a = x; a > 0; a--) {
        let buff = "";

        for (let b = 0; b < y; b++) {
            if (a == x) {
                buff += "L" + a + b + " ";
            } else if (a % 2 != 0) {
                buff += "A" + a + b + " ";
            } else {
                buff += "O" + a + b + " ";
            }
        }
        console.log(buff);
    }
}
building(["6",

    "4"])