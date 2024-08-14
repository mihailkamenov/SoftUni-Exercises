function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    console.log(`${dogFood * 2.5 + catFood * 4} lv.`);
}

petShop(["5", "4"])