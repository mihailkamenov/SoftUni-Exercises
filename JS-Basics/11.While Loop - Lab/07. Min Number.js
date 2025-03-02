function minNumber(input) {
    let index = 0;
    let myMinNumber = Number.MAX_SAFE_INTEGER;

    let element = input[index];
    index++;

    while (element !== "Stop") {
        let num = Number(element);

        if (num < myMinNumber) {
            myMinNumber = num;
        }
        element = input[index];
        index++;
    }
    console.log(myMinNumber);
}
minNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])