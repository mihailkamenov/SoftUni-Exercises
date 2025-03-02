function summerOutfit(degrees, partOfTheDay) {
    let outfit = "";
    let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        if (partOfTheDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (partOfTheDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else {
        if (partOfTheDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (partOfTheDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(16, "Morning");