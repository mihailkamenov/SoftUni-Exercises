function sequence2kPlusOne(input) {
    let n = Number(input[0]);

    let number = 1;

    while (number <= n) {
        console.log(number);
        number = number * 2 + 1;
    }
}
sequence2kPlusOne(["31"])