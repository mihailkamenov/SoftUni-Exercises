function coins(input) {
    let money = Number(input[0]);
    let numberCoins = 0;

    while (money >= 2) {
        money -= 2;
        numberCoins++;
        continue;
    }

    while (money >= 1) {
        money -= 1.00;
        numberCoins++;
        continue;
    }

    while (money >= 0.5) {
        money -= 0.5;
        numberCoins++;
        continue;
    }

    while (money >= 0.2) {
        money -= 0.2;
        numberCoins++;
        continue;
    }

    while (money >= 0.1) {
        money -= 0.1;
        numberCoins++;
        continue;
    }

    while (money >= 0.05) {
        money -= 0.05;
        numberCoins++;
        continue;
    }

    while (money >= 0.02) {
        money -= 0.02;
        numberCoins++;
        continue;
    }

    while (money >= 0.01) {
        money -= 0.01;
        numberCoins++;
        continue;
    }
    console.log(numberCoins);
}
coins(["1.23"])