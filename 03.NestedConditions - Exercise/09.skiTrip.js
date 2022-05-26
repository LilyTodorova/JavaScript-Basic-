function skiTrip(input) {
    const totalDays = Number(input[0]);
    const typeRoom = input[1];
    const rating = input[2];
    let roomForOnePrice = 18;
    let apartmentPrice = 25;
    let presidentApartPrice = 35
    let totalNights = totalDays - 1;
    let totalPaid = Number("");

    if (typeRoom == "apartment") {
        if (totalDays < 10) {
            totalPaid = totalNights * apartmentPrice * 0.7;
        } else if (totalDays >= 10 && totalDays <= 15) {
            totalPaid = totalNights * apartmentPrice * 0.65;
        } else {
            totalPaid = totalNights * apartmentPrice * 0.5;
        }
    } else if (typeRoom == "president apartment") {
        if (totalDays < 10) {
            totalPaid = totalNights * presidentApartPrice * 0.9;
        } else if (totalDays >= 10 && totalDays <= 15) {
            totalPaid = totalNights * presidentApartPrice * 0.85;
        } else {
            totalPaid = totalNights * presidentApartPrice * 0.8;
        }
    } else {
        totalPaid = totalNights * roomForOnePrice
    }

    if (rating == "positive") {
        totalPaid = totalPaid * 0.25 + totalPaid
    } else {
        totalPaid *= 0.9
    }
    console.log(totalPaid.toFixed(2))
}
skiTrip(["30",
    "president apartment",
    "negative"])

