function basketball(input) {
    let fee = Number(input[0]);
    let trainers = fee * 0.6;
    let outfit = trainers * 0.8;
    let ball = outfit * 0.25;
    let other = ball * 0.2
    let sum = fee + trainers + outfit + ball + other;
    console.log(sum);
}
basketball(["365"]);