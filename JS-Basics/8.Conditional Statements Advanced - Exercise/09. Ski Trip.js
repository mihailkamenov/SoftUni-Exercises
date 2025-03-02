function skiTrip(input) {
    let days = Number(input[0]);
    let accommodationType = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;
    let discount = 0;

    if (accommodationType == "room for one person") {
        price = nights * 18;
    } else if (accommodationType == "apartment") {
        price = nights * 25;
    } else if (accommodationType == "president apartment") {
        price = nights * 35;
    }

    switch (accommodationType) {
        case "apartment":
            if (days < 10) {
                discount = 0.70;
            } else if (days <= 15) {
                discount = 0.65;
            } else {
                discount = 0.50;
            }
            break;

        case "president apartment":
            if (days < 10) {
                discount = 0.90;
            } else if (days <= 15) {
                discount = 0.85;
            } else {
                discount = 0.80;
            }
            break;
    }

    if (discount > 0) {
        price *= discount;
    }
    let addingDiscount = 0;

    if (rating == "positive") {
        addingDiscount = 1.25;
    } else {
        addingDiscount = 0.90;
    }

    if (addingDiscount > 0) {
        price *= addingDiscount;
    }

    console.log(price.toFixed(2));
}
skiTrip(["12", "room for one person", "positive"]);