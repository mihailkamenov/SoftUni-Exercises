function shop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let sum = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    sum = 2.50 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "apple":
                    sum = 1.20 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "orange":
                    sum = 0.85 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "grapefruit":
                    sum = 1.45 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "kiwi":
                    sum = 2.70 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "pineapple":
                    sum = 5.50 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "grapes":
                    sum = 3.85 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                default:
                    console.log("error");
                    break;
            }
            break;

        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    sum = 2.70 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "apple":
                    sum = 1.25 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "orange":
                    sum = 0.90 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "grapefruit":
                    sum = 1.60 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "kiwi":
                    sum = 3.00 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "pineapple":
                    sum = 5.60 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                case "grapes":
                    sum = 4.20 * quantity;
                    console.log(sum.toFixed(2));
                    break;

                default:
                    console.log("error");
                    break;
            }
            break;

        default:
            console.log("error");
            break;
    }




}
shop(["tomato", "Monday", "0.5"]);
//banana apple orange grapefruit kiwi pineapple grapes
//2.50 1.20 0.85 1.45 2.70 5.50 3.85
//2.70 1.25 0.90 1.60 3.00 5.60 4.20