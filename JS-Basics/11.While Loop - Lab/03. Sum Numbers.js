function sumNumbers(input) {
    let index = 0;

    let sumToGo = input[index];
    index++;

    let sum = 0;

    while (sum < sumToGo) {
        let number = Number(input[index]);
        index++;

        sum += number;
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"])