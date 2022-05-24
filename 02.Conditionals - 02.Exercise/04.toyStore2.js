function toyStore(input) {
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let profitBruto = puzzle*2.60 + dolls*3 + teddyBears*4.10 + minions*8.20 + trucks*2;
    let allToys = puzzle + dolls + teddyBears + minions + trucks;

    if (allToys >= 50) {
        discount = profitBruto*0.25;    
    } else {                          // винаги else, дори да е нула или вече да сме го задали
        discount = Number(0);
    }
    let profitNeto = profitBruto - discount
    let rent = profitNeto*0.10;
    let moneyLeft = profitNeto - rent;

    if (moneyLeft >= tripPrice) {
        console.log(`Yes! ${(moneyLeft - tripPrice).toFixed(2)} lv left.`)
    } else  {
        console.log(`Not enough money! ${(tripPrice - moneyLeft).toFixed(2)} lv needed.`)
    }
}
    
    toyStore(["40.8","20","25","30","50","10"])
    