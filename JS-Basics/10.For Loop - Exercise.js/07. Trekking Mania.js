function trekkingMania(input) {
    let groupsNumber = Number(input[0]);

    let toMusala = 0;
    let toMonblan = 0;
    let toKilimandjaro = 0;
    let toK2 = 0;
    let toEverest = 0;

    let allPeople = 0;

    for (let i = 1; i <= groupsNumber; i++) {
        let peopleInGroup = Number(input[i]);
        allPeople += peopleInGroup;

        if (peopleInGroup <= 5) {
            toMusala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            toMonblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            toKilimandjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            toK2 += peopleInGroup;
        } else {
            toEverest += peopleInGroup;
        }
    }

    let percentToMusala = toMusala / allPeople * 100;
    let percentToMonblan = toMonblan / allPeople * 100;
    let percentToKilimandjaro = toKilimandjaro / allPeople * 100;
    let percentToK2 = toK2 / allPeople * 100;
    let percentToEverest = toEverest / allPeople * 100;

    console.log(`${percentToMusala.toFixed(2)}%`);
    console.log(`${percentToMonblan.toFixed(2)}%`);
    console.log(`${percentToKilimandjaro.toFixed(2)}%`);
    console.log(`${percentToK2.toFixed(2)}%`);
    console.log(`${percentToEverest.toFixed(2)}%`);
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])