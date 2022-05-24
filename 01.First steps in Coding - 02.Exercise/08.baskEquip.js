function baskEquip(input) {
    const trainingFee = Number(input[0]);
    let shoes = trainingFee - (trainingFee * 0.4);
    let clothes = shoes - (shoes * 0.2);
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;
    let totalCosts = trainingFee + shoes + clothes + ball + accessories;
    console.log(totalCosts)
}
baskEquip([365])