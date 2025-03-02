function accountBalance(input) {
    let index = 0;
    let balance = 0;

    let income = input[index];
    index++;

    while (income !== "NoMoreMoney") {
        let amount = Number(income);
        if (amount < 0) {
            console.log("Invalid operation!")
            break;
        } else {
            balance += amount;
            console.log("Increase: " + amount.toFixed(2));
            income = input[index];
            index++;
        }
    }
    console.log("Total: " + balance.toFixed(2));
}
accountBalance(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"])