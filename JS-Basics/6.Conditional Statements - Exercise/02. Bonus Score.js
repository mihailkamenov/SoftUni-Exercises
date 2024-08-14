function bonusScore(input) {
    let score = Number(input[0]);

    let bonus = 0;

    if (score <= 100) {
        bonus = 5;;
    } else if (score >= 1000) {
        bonus = score * 0.1;
    } else if (score >= 100) {
        bonus = score * 0.2;
    }

    let sum = score + bonus;
    let doubleBonus = 0;

    if (score % 2 == 0) {
        doubleBonus = 1;
    } else if (score % 5 == 0) {
        doubleBonus = 2;
    }

    let sumAll = sum + doubleBonus;

    console.log(bonus + doubleBonus);
    console.log(sumAll);
}
bonusScore(["2703"]);