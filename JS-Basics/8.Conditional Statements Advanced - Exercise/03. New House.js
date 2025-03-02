function newHouse(input) {
    let type = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);

    //let sumRoses = numberFlowers * 5;
    //let sumDahlias = numberFlowers * 3.80;
    //let sumTulips = numberFlowers * 2.80;
    //let sumNarcissus = numberFlowers * 3;
    //let sumGladious = numberFlowers * 2.50;

    let totalPrice = 0;

    if (type == "Roses") {
        totalPrice = numberFlowers * 5;
    } else if (type == "Dahlias") {
        totalPrice = numberFlowers * 3.80;
    } else if (type == "Tulips") {
        totalPrice = numberFlowers * 2.80;
    } else if (type == "Narcissus") {
        totalPrice = numberFlowers * 3;
    } else if (type == "Gladiolus") {
        totalPrice = numberFlowers * 2.50;
    }

    let discount = 0;
    let adding = 0;

    if (numberFlowers > 80 && type == "Roses") {
        discount = 0.90;
        totalPrice *= discount;
    } else if (numberFlowers > 90 && type == "Dahlias") {
        discount = 0.85;
        totalPrice *= discount;
    } else if (numberFlowers > 80 && type == "Tulips") {
        discount = 0.85;
        totalPrice *= discount;
    } else if (numberFlowers < 120 && type == "Narcissus") {
        adding = 1.15;
        totalPrice *= adding;
    } else if (numberFlowers < 80 && type == "Gladiolus") {
        adding = 1.20;
        totalPrice *= adding;
    }

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (budget >= totalPrice) {
        moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${numberFlowers} ${type} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < totalPrice) {
        moneyNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHouse(["Gladiolus", "64", "160"]);