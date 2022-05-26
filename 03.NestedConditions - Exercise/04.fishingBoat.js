function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const allFishermen = Number(input[2]);
    let springBoatRentPrice = 3000;
    let summerBoatRentPrice = 4200;
    let autumnBoatRentPrice = 4200;
    let winterBoatRentPrice = 2600;
    let price = Number("");

    if(season == "Spring") {
       if ( allFishermen <= 6) {
           price = springBoatRentPrice * 0.9;
       } else if (allFishermen >= 7 && allFishermen <= 11) {
           price = springBoatRentPrice * 0.85;
       } else if (allFishermen >= 12) {
           price = springBoatRentPrice * 0.75
       } else {
           price = springBoatRentPrice;
       }
    } else if (season =="Summer") {
        if (allFishermen<=6) {
            price = summerBoatRentPrice * 0.9;
        } else if (allFishermen >= 7 && allFishermen <= 11) {
            price = summerBoatRentPrice * 0.85;
        } else if (allFishermen >= 12) {
            price = summerBoatRentPrice * 0.75
        } else {
            price = summerBoatRentPrice;
        }
    } else if (season == "Autumn") {
        if (allFishermen<=6) {
            price = autumnBoatRentPrice * 0.9;
        } else if (allFishermen >= 7 && allFishermen <= 11) {
            price = autumnBoatRentPrice * 0.85;
        } else if (allFishermen >= 12) {
            price = autumnBoatRentPrice * 0.75
        } else {
            price = autumnBoatRentPrice;
        }
    } else if (season == "Winter") {
        if (allFishermen<=6) {
            price = winterBoatRentPrice * 0.9;
        } else if (allFishermen >= 7 && allFishermen <= 11) {
            price = winterBoatRentPrice * 0.85;
        } else if (allFishermen >= 12) {
            price = winterBoatRentPrice * 0.75
        } else {
            price = winterBoatRentPrice;
        }
    }
    if (allFishermen % 2 === 0) {
        if (season =="Spring" || season == "Summer" || season == "Winter"){
            price *= 0.95;
        }
    } 
    if (budget>= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }

}
fishingBoat(["3600",
"Autumn",
"6"])



