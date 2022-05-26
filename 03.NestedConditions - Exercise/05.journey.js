function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let priceOfTheTrip = Number("");
    let destination;
    let tripPlace; 

    if (budget <= 100) {
        destination = "Bulgaria";
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe"
    }

    if (destination == "Bulgaria") {
        if (season == "summer") {
            priceOfTheTrip = budget * 0.3;
        } else {
            priceOfTheTrip = budget * 0.7
        }
    } else if (destination == "Balkans") {
        if (season == "summer") {
            priceOfTheTrip = budget * 0.4
        } else {
            priceOfTheTrip = budget * 0.8
        }
    } else {
        priceOfTheTrip = budget * 0.9
    }

    if (destination == "Bulgaria" || destination == "Balkans") {
        if (season == "summer") {
            tripPlace = "Camp"
        } else if (season == "winter") {
            tripPlace ="Hotel"
        }
    } else {
        tripPlace = "Hotel";
    }
    

    console.log(`Somewhere in ${destination}`);
    console.log (`${tripPlace} - ${priceOfTheTrip.toFixed(2)}`)

}
journey(["1500", "summer"])