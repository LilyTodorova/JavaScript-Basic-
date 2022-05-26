function hotelRoom(input) {
    const month = input[0];
    const numberOfNights = Number(input[1]);
    let totalPriceStudio;
    let totalPriceApartment;

    if (month == "May" || month == "October") {
        if (numberOfNights > 7 && numberOfNights <= 13) {
            totalPriceStudio = 50 * numberOfNights * 0.95;
        } else if (numberOfNights > 14) {
            totalPriceStudio = 50 * numberOfNights * 0.7;
        } else {
            totalPriceStudio = 50 * numberOfNights;
        }
    } else if (month == "June" || month == "September") {
        if (numberOfNights > 14) {
            totalPriceStudio = 75.20 * numberOfNights * 0.8;
        } else {
            totalPriceStudio = 75.20 * numberOfNights
        }
    } else {
        totalPriceStudio = 76 * numberOfNights;
    }
    if (month == "May" || month == "October"){
        if (numberOfNights > 14) {
            totalPriceApartment = numberOfNights * 65 * 0.9;
        } else {
            totalPriceApartment = numberOfNights * 65;
        }
    } else if (month == "June" || month == "September") {
        if (numberOfNights > 14) {
            totalPriceApartment = numberOfNights * 68.70 * 0.9;
        } else {
            totalPriceApartment = numberOfNights * 68.70;
        }
    } else {
        if (numberOfNights > 14) {
            totalPriceApartment = numberOfNights * 77 * 0.9;
        } else {
            totalPriceApartment = numberOfNights * 77;
        }
    }
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)

}
hotelRoom(["June","14"])

