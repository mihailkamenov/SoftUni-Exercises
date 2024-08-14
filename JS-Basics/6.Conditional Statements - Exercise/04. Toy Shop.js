function toys(input) {
    let excursionPrice = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzelsCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let sumCount = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let sumPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if (sumCount >= 50) {
        sumPrice = sumPrice * 0.75;
    }

    let rentPrice = sumPrice * 0.1;
    sumPrice = sumPrice - rentPrice;
    let lvLeft = 0;
    let lvNeeded = 0;

    if (sumPrice >= excursionPrice) {
        lvLeft = sumPrice - excursionPrice;
        console.log(`Yes! ${lvLeft.toFixed(2)} lv left.`);
    } else {
        lvNeeded = excursionPrice - sumPrice;
        console.log(`Not enough money! ${lvNeeded.toFixed(2)} lv needed.`);
    }
}
toys((["40.8", "20", "25", "30", "50", "10"]));