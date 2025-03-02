function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let i = 0;
    let spendingDays = 0;
    let days = 0;
    let isBreak = false;

    while (i < input.length) {
        let money = Number(input[index]);
        index++;

        if (command == "spend") {
            currentMoney -= money;
            spendingDays++;
            days++;
        } else {
            currentMoney += money;
            days++;
            spendingDays = 0;
        }

        if (currentMoney < 0) {
            currentMoney = 0;
        }

        if (spendingDays > 4) {
            isBreak = true;
            break;
        }

        if (currentMoney >= moneyNeeded) {
            break;
        }
        command = input[index];
        index++;
    }

    if (isBreak) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"])