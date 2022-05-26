function newHouse(input) {
    const flowerType = input[0];
    const flowerCount = Number(input[1]);
    const budget = Number(input[2]);
    let price = Number("")
    let rosePrice = 5;
    let dahliaPrice = 3.8;
    let tulipPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusprice = 2.5;
    if ( flowerType == "Roses") {
        if (flowerCount > 80) {
            price = (flowerCount * rosePrice) * 0.9; 
        } else {
            price = flowerCount * rosePrice;
        }
    } else if (flowerType == "Dahlias") {
        if (flowerCount > 90) {
            price = (flowerCount * dahliaPrice) * 0.85;
        } else {
            price = flowerCount * dahliaPrice
        }
    } else if (flowerType == "Tulips") {
        if (flowerCount > 80) {
            price = (flowerCount * tulipPrice) * 0.85;
        } else {
            price = flowerCount * tulipPrice;
        }
    } else if (flowerType == "Narcissus") {
        if (flowerCount < 120) {
            price = (flowerCount * narcissusPrice) * 1.15;
        } else {
            price = flowerCount * narcissusPrice;
        }
    } else if (flowerType == "Gladiolus") {
        if (flowerCount < 80) {
            price = (flowerCount * gladiolusprice) * 1.2;
        } else {
            price = flowerCount * gladiolusprice;
        }
    }
    
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`)
    }
 

}
newHouse(["Narcissus","119","360"])




