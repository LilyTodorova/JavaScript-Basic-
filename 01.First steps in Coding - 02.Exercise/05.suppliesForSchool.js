function suppliesForSchool(input) {
    const pens = Number(input[0]);
    const markers = Number(input[1]);
    const cleanSupp = Number(input[2]);
    let percent = Number(input[3]);
    let allSupp = pens * 5.80 + markers * 7.20 + cleanSupp * 1.20;
    let discount = (allSupp * percent) / 100;
    let result = allSupp - discount;
    console.log(result);
}
suppliesForSchool([2, 3, 4 , 25]);