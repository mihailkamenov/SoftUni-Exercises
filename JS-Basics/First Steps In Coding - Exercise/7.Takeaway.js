function food(input) {
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.40;
    let vegetarian = Number(input[2]) * 8.15;
    let sum = (chicken + fish + vegetarian) + (chicken + fish + vegetarian) * 0.2 + 2.5;
    console.log(sum);
}
food(["2", "4", "3"]);