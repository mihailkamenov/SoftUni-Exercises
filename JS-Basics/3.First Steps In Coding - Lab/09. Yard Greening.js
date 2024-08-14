function yardGreening(input){
    let firstGarden=Number(input[0])*7.61;
    let discount=firstGarden*0.18;
    let priceWithDiscount=firstGarden-discount;
    
    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"])