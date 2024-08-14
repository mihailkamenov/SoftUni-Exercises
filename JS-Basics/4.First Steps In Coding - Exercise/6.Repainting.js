function repainting(input) {
    let nylon = Number(input[0]);
    let nylonPrice = (nylon + 2) * 1.5;
    let paint = Number(input[1]);
    let paintPrice = Number((paint * 1.1 * 14.50).toFixed(2));
    let thinner = Number(input[2]);
    let thinnerPrice = thinner * 5;
    let hours = Number(input[3]);

    let sum = (nylonPrice + paintPrice + thinnerPrice + 0.4);
    let sumAll = (hours * 0.3) * sum + sum;
    console.log(sumAll);
}
repainting(["10", "11", "4", "8"]);