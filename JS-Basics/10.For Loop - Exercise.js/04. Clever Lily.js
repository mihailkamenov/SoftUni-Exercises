function cleverLily(input) {
    let years = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let collectedToys = 0;
    let collectedMoney = 0;
    let moneyToGet = 0;

    for (let i = 1; i <= years; i++) {
        if (i % 2 == 1) {
            collectedToys++;
        } else if (i % 2 == 0) {
            moneyToGet += 10;
            collectedMoney += moneyToGet;
            collectedMoney -= 1;
        }
    }

    collectedMoney += collectedToys * pricePerToy;

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (collectedMoney >= washingMachinePrice) {
        moneyLeft = collectedMoney - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyNeeded = washingMachinePrice - collectedMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["10",

    "170.00",

    "6"])