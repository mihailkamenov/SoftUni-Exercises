function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let journeyKind = "";

    if (season == "summer") {
        journeyKind = "Camp";
    } else {
        journeyKind = "Hotel";
    }

    let destination = "";
    let spentMoney = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            spentMoney = budget * 0.30;
        } else {
            spentMoney = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            spentMoney = budget * 0.40;
        } else {
            spentMoney = budget * 0.80;
        }
    } else {
        destination = "Europe";
        journeyKind = "Hotel";
        spentMoney = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyKind} - ${spentMoney.toFixed(2)}`);
}
journey(["50", "summer"]);