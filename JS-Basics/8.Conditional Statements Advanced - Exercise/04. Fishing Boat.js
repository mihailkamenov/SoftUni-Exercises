function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersNumber = Number(input[2]);

    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;
            break;

        case "Summer":
        case "Autumn":
            rent = 4200;
            break;

        case "Winter":
            rent = 2600;
            break;
    }

    let discount = 0;

    if (fishersNumber <= 6) {
        discount = 0.90;
    } else if (fishersNumber <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    let extraDiscount = 0;
    let totalPrice = rent * discount;

    if (fishersNumber % 2 == 0 && season != "Autumn") {
        extraDiscount = 0.95;
        totalPrice *= extraDiscount;
    }

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (budget >= totalPrice) {
        moneyLeft = budget - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",

    "Autumn",

    "6"]);