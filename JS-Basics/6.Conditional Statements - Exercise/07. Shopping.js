function shopping(input) {
    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoPrice = videoCount * 250;
    let cpuPrice = videoPrice * 0.35 * cpuCount;
    let ramPrice = videoPrice * 0.10 * ramCount;
    let sum = videoPrice + cpuPrice + ramPrice;

    if (videoCount > cpuCount) {
        sum = sum * 0.85;
    }

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (budget >= sum) {
        moneyLeft = budget - sum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        moneyNeeded = sum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);