function deposit(input) {
    let depositedSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let depositPercent = Number(input[2]);
    let sum = depositedSum + depositTerm * ((depositedSum * (depositPercent / 100)) / 12);
    console.log(sum);
}
deposit(["200", "3", "5.7"]);