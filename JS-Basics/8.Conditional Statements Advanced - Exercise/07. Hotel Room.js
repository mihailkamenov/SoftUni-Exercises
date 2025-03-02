function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let rentStudio = 0;
    let rentApartment = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            rentStudio = nights * studio;
            rentApartment = nights * apartment;
            break;

        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            rentStudio = nights * studio;
            rentApartment = nights * apartment;
            break;

        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            rentStudio = nights * studio;
            rentApartment = nights * apartment;
            break;
    }

    let discountStudio = 0;
    let discountApartment = 0;

    if (nights > 14 && month == "May" || month == "October") {
        discountStudio = 0.70;
        rentStudio *= discountStudio;
    } else if (nights > 7 && month == "May" || month == "October") {
        discountStudio = 0.95;
        rentStudio *= discountStudio;
    } else if (nights > 14 && month == "June" || month == "September") {
        discountStudio = 0.80;
        rentStudio *= discountStudio;
    }

    if (nights > 14) {
        discountApartment = 0.90;
        rentApartment *= discountApartment;
    }

    console.log(`Apartment: ${rentApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${rentStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])