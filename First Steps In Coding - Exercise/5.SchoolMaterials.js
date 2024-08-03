function materials(input) {
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let preparat = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;
    let sum = (pens + markers + preparat) - (pens + markers + preparat) * discount;
    console.log(sum);
}
materials(["2", "3", "4", "25"]);