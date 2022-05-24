function usdToBGN(input) {
    const fixedValue = 1.79549 //стойност нява да бъде променяно
    let usd = Number(input[0]);
    let bgn = usd * fixedValue;
    console.log(bgn);

}
usdToBGN([22]);