function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let final = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isValid = false;

    for (let x = start; x <= final; x++) {
        for (let y = start; y <= final; y++) {
            counter++;
            if (x + y == magicNumber) {
                isValid = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isValid) {
            break;
        }
    }
    if (!isValid) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["23",

    "24",

    "20"])