function maxNumber(input) {
    let index = 0;

    let myMaxNumber = Number.MIN_SAFE_INTEGER;

    let inputElement = input[index];
    index++;

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (myMaxNumber < num) {
            myMaxNumber = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(myMaxNumber);
}
maxNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])