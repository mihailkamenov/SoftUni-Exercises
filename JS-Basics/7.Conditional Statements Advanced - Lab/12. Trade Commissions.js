function tradeCommission(input) {
    let city = input[0];
    let sold = Number(input[1]);

    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sold >= 0 && sold <= 500) {
                commission = 0.05 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 500 && sold <= 1000) {
                commission = 0.07 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 1000 && sold <= 10000) {
                commission = 0.08 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 10000) {
                commission = 0.12 * sold;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Varna":
            if (sold >= 0 && sold <= 500) {
                commission = 0.045 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 500 && sold <= 1000) {
                commission = 0.075 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 1000 && sold <= 10000) {
                commission = 0.10 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 10000) {
                commission = 0.13 * sold;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Plovdiv":
            if (sold >= 0 && sold <= 500) {
                commission = 0.055 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 500 && sold <= 1000) {
                commission = 0.08 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 1000 && sold <= 10000) {
                commission = 0.12 * sold;
                console.log(commission.toFixed(2));
            } else if (sold > 10000) {
                commission = 0.145 * sold;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        default:
            console.log("error");
            break;
    }
}
tradeCommission(["Plovdiv", "499.99"]);