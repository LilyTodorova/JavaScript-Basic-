function repainting(input) {
    const nylonSqM = Number(input[0]);
    const paintLitre = Number(input[1]);
    const diluentLitre = Number(input[2]);
    const hoursNeeded = Number(input[3]);
    let nylonPrice = (nylonSqM + 2) * 1.5;
    let paintPrice = 
    (paintLitre * 14.50) + ((paintLitre * 14.50) * 0.1);
    let diluentPrice = diluentLitre * 5.00;
    let allPrice = paintPrice + diluentPrice + 
    nylonPrice + 0.40;
    let hourPayment = (allPrice * 0.3) * hoursNeeded;
    let allPaid = allPrice + hourPayment;
    console.log(`${allPaid} сумата на всички разходи`);
}

repainting([5, 10, 10, 1])